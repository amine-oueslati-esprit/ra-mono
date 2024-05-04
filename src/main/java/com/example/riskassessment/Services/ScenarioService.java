package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Controle;
import com.example.riskassessment.DAO.Entities.Scenario;
import com.example.riskassessment.DAO.Repositories.scenarioRepo;
import com.example.riskassessment.Services.Interfaces.IScenarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScenarioService implements IScenarioService {
    private final scenarioRepo sRepo;

    @Override
    public Scenario addScenario(Scenario x) {
        sRepo.save(x);
        calcRisqueInherentScore(x.getIdScenario());
        return sRepo.save(x);
    }

    @Override
    public Scenario findById(long id) {
        return sRepo.findById(id).get();
    }

    @Override
    public List<Scenario> findAll() {
        return sRepo.findAll();
    }

    @Override
    public Scenario updateScenario(Scenario x) {
        return sRepo.save(x);
    }

    @Override
    public void deleteScenario(long id) { sRepo.deleteById(id);    }

    @Override
    public void deleteScenario(Scenario x) { sRepo.delete(x);    }

    @Override
    public void calcRisqueInherentScore(long idScenario) {
        Scenario s = sRepo.findById(idScenario).get();
        s.setRisqueInherentScore(s.getVraisemblanceInherente()*s.getImpactInherent());
        sRepo.save(s);
    }

    @Override
    public void calcRisqueReelScore(long idScenario) {
        Scenario s = sRepo.findById(idScenario).get();
        List<Controle> ls= s.getControleList();

        for (Controle x : ls) {
            if (x.isExistant()){
                // Perform your operation here
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
            if (!x.isExistant()){
                // Perform your operation here
                s.setImpactInherent(s.getImpactReel()-x.getValeurReductionImpact());
                s.setVraisemblanceInherente(s.getVraisemblanceReelle()-x.getValeurReductionProbabilite());
                sRepo.save(s);
            }
        }
        s.setRisqueResiduelScore(s.getVraisemblanceReelle()*s.getImpactReel());
        sRepo.save(s);

    }
}