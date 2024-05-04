package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.Scenario;

import java.util.List;

public interface IScenarioService {
    Scenario addScenario(Scenario x);
    Scenario findById(long id);
    List<Scenario> findAll();
    Scenario updateScenario(Scenario x);
    void deleteScenario(long id);
    void deleteScenario(Scenario x);
}
