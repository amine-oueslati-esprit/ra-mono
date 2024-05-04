package com.example.riskassessment.Services;

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
    public Scenario addScenario(Scenario x) { return sRepo.save(x);
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
}
