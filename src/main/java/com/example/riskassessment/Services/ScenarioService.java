package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Controle;
import com.example.riskassessment.DAO.Entities.Scenario;
import com.example.riskassessment.DAO.Repositories.controleRepo;
import com.example.riskassessment.DAO.Repositories.scenarioRepo;
import com.example.riskassessment.Services.Interfaces.IScenarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScenarioService implements IScenarioService {
    private final scenarioRepo sRepo;
    private final controleRepo cRepo;

    @Override
    public Scenario addScenario(Scenario x) {
        x.setRisqueInherentScore(calcRisqueInherentScore(x.getVraisemblanceInherente(), x.getImpactInherent()));
        return sRepo.save(x);
    }

    @Override
    public Scenario updateScenario(Scenario x) {
        x.setRisqueInherentScore(calcRisqueInherentScore(x.getVraisemblanceInherente(), x.getImpactInherent()));
        return sRepo.save(x);
    }

    @Override
    public Scenario findById(long id) {
        calcRisqueReelScore(id);
        calcRisqueResiduelScore(id);
        return sRepo.findById(id).get();
    }

    @Override
    public List<Scenario> findAll() {
        return sRepo.findAll();
    }



    @Override
    public void deleteScenario(long id) { sRepo.deleteById(id);    }

    @Override
    public void deleteScenario(Scenario x) { sRepo.delete(x);    }


    @Override
    public float calcRisqueInherentScore(float vh, float ih) {
        float rI = 0;
        return rI =vh*ih;
    }

    @Override
    public void affecterControleAScenario(long idCtrl, long idScena) {
        Controle controle=cRepo.findById(idCtrl).get(); //child
        Scenario scenario=sRepo.findById(idScena).get();//parent
        //On affecte le child au parent
        scenario.getControleList().add(controle);
        sRepo.save(scenario);

        calcRisqueReelScore(idScena);
        calcRisqueResiduelScore(idScena);

    }


    @Override
    public void calcRisqueReelScore(long idScenario) {
        Scenario s = sRepo.findById(idScenario).get();
        List<Controle> ls= s.getControleList();

        for (Controle x : ls) {
            if (x.isExistant()){ //Si controle mis en place
                s.setImpactReel(s.getImpactInherent()-x.getValeurReductionImpact());
                s.setVraisemblanceReelle(s.getVraisemblanceInherente()-x.getValeurReductionProbabilite());
                sRepo.save(s);
            }
        }
        s.setRisqueReelScore(s.getVraisemblanceReelle()*s.getImpactReel());
        sRepo.save(s);
    }

    @Override
    public void calcRisqueResiduelScore(long idScenario) {
        Scenario s = sRepo.findById(idScenario).get();
        List<Controle> ls= s.getControleList();

        for (Controle x : ls) {
            if (x.isExistant()==false){ //Si controle pas encore mis en place
                s.setImpactResiduel(s.getImpactReel()-x.getValeurReductionImpact());
                s.setVraisemblanceResiduelle(s.getVraisemblanceReelle()-x.getValeurReductionProbabilite());
                sRepo.save(s);
            }
        }
        s.setRisqueResiduelScore(s.getVraisemblanceResiduelle()*s.getImpactResiduel());
        sRepo.save(s);

    }
}