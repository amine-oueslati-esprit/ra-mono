package com.example.riskassessment.RC;

import com.example.riskassessment.DAO.Entities.Scenario;
import com.example.riskassessment.Services.Interfaces.IScenarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Scenarios")
public class ScenarioC {
    private final IScenarioService ScenarioRest;

    @PostMapping("/addScenario")
    Scenario ajouterScenario(@RequestBody Scenario x){
        return ScenarioRest.addScenario(x);
    }

    @PutMapping("/updateScenario")
    Scenario modifierScenario(@RequestBody Scenario x){
        return ScenarioRest.updateScenario(x);
    }

    @DeleteMapping("/deleteScenario")
    void deleteScenario(Scenario x){
        ScenarioRest.deleteScenario(x);
    }

    @DeleteMapping("/deleteScenarioById/{id}")
    void  deleteScenarioById(@PathVariable long id){
        ScenarioRest.deleteScenario(id);
    }

    @GetMapping("/findAllScenarios/")
    List<Scenario> findAll(){
        return ScenarioRest.findAll();
    }

    @GetMapping("/findOneScenarioById/{id}")
    Scenario findById(@PathVariable long id){
        return ScenarioRest.findById(id);
    }


}
