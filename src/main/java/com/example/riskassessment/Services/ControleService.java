package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Controle;
import com.example.riskassessment.DAO.Entities.Scenario;
import com.example.riskassessment.DAO.Repositories.controleRepo;
import com.example.riskassessment.DAO.Repositories.scenarioRepo;
import com.example.riskassessment.Services.Interfaces.IControleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class ControleService implements IControleService {
    private final controleRepo cRepo;
    private final scenarioRepo sRepo;

    @Override
    public Controle addControle(Controle x) {
        cRepo.save(x);
        calcEfficaciteCtrl(x);
        calcValRedImpact(x);
        calcValRedProbabilite(x);
        return cRepo.save(x);
    }

    @Override
    public Controle findById(long id) {
        return cRepo.findById(id).get();
    }

    @Override
    public List<Controle> findAll() { return cRepo.findAll();}

    @Override
    public Controle updateControle(Controle x) {
        cRepo.save(x);
        calcEfficaciteCtrl(x);
        calcValRedImpact(x);
        calcValRedProbabilite(x);
        return cRepo.save(x);
    }

    @Override
    public void deleteControle(long id) { cRepo.deleteById(id);    }

    @Override
    public void deleteControle(Controle x) { cRepo.delete(x);    }

    @Override
    public void calcEfficaciteCtrl(Controle x) {
        x.setEfficacite(x.getConception()*x.getPerformance());
        cRepo.save(x);
    }

    @Override
    public void affecterCtrlAScena(long id, long idscenario) {
        Controle controle=cRepo.findById(id).get(); //child
        Scenario scenario=sRepo.findById(idscenario).get();//parent
        //On affecte le child au parent
        scenario.getControleList().add(controle);
        sRepo.save(scenario);

        scenario.setRisqueReelScore(idscenario);
        scenario.setRisqueResiduelScore(idscenario);
        sRepo.save(scenario);
    }

    @Override
    public float calcValRedImpact(Controle x) {
        x.setValeurReductionImpact((x.getEfficacite()*x.getValeurReductionImpact())/4);
        cRepo.save(x);
        return x.getValeurReductionImpact();
    }

    @Override
    public float calcValRedProbabilite(Controle x) {
        x.setValeurReductionProbabilite((x.getEfficacite()*x.getValeurReductionProbabilite())/4);
        cRepo.save(x);
        return x.getValeurReductionProbabilite();
    }
}