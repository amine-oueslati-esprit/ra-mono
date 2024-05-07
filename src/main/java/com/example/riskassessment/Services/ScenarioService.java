package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Controle;
import com.example.riskassessment.DAO.Entities.Scenario;
import com.example.riskassessment.DAO.Enumerations.niveau_risque;
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
        x.setRisqueInherentNiveau(niveau_risque.valueOf(setrisklevel(x.getRisqueInherentScore())));

        x.setRisqueReelNiveau(x.getRisqueInherentNiveau());
        x.setRisqueReelScore(x.getRisqueInherentScore());

        x.setRisqueResiduelNiveau(x.getRisqueInherentNiveau());
        x.setRisqueResiduelScore(x.getRisqueInherentScore());
        return sRepo.save(x);
    }

    @Override
    public Scenario updateScenario(Scenario x) {
        x.setRisqueInherentScore(calcRisqueInherentScore(x.getVraisemblanceInherente(), x.getImpactInherent()));
        return sRepo.save(x);
    }

    @Override
    public Scenario findById(long id) { return sRepo.findById(id).get();}

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

        //on calcule les attributs après rajout de controles
        calcRisqueReelScore(scenario);
        calcRisqueResiduelScore(scenario);
        sRepo.save(scenario);


    }


    @Override
    public void calcRisqueReelScore(Scenario s) {
        List<Controle> ls= s.getControleList();

        for (Controle x : ls) {
            if (x.isExistant()){ //Si controle mis en place
                s.setImpactReel(s.getImpactInherent()-x.getValeurReductionImpact());
                s.setVraisemblanceReelle(s.getVraisemblanceInherente()-x.getValeurReductionProbabilite());
            }
        }
        s.setRisqueReelScore(s.getVraisemblanceReelle()*s.getImpactReel());
        s.setRisqueReelNiveau(niveau_risque.valueOf(setrisklevel(s.getRisqueReelScore())));
        sRepo.save(s);

    }

    @Override
    public void calcRisqueResiduelScore(Scenario s) {
        List<Controle> ls= s.getControleList();

        for (Controle x : ls) {
            if (x.isExistant()==false){ //Si controle pas encore mis en place
                s.setImpactResiduel(s.getImpactReel()-x.getValeurReductionImpact());
                s.setVraisemblanceResiduelle(s.getVraisemblanceReelle()-x.getValeurReductionProbabilite());
            }
        }
        s.setRisqueResiduelScore(s.getVraisemblanceResiduelle()*s.getImpactResiduel());
        s.setRisqueResiduelNiveau(niveau_risque.valueOf(setrisklevel(s.getRisqueResiduelScore())));
        sRepo.save(s);

    }

    @Override
    public String setrisklevel(float riskscore) {
        String level="";

        if (riskscore<=3)
            level = "faible";
        else if (riskscore<=8)
            level = "moyen";
        else if (riskscore<=19)
            level = "haut";
        else if (riskscore<=25)
            level="tres_eleve";
        else
            level="error";

        return level;
    }

}