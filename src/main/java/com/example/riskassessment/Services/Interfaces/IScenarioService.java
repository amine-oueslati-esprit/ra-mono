package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.Scenario;

import java.util.List;

public interface IScenarioService {
    Scenario addScenario(Scenario x);
    Scenario updateScenario(Scenario x);

    Scenario findById(long id);
    List<Scenario> findAll();

    void deleteScenario(long id);
    void deleteScenario(Scenario x);

    float calcRisqueInherentScore(float vh,float ih );

    void affecterControleAScenario(long idCtrl, long idScena);

    void calcRisqueReelScore(Scenario s);
    void calcRisqueResiduelScore(Scenario s);

    String setrisklevel(float riskscore);


}