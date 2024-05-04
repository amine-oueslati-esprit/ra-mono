package com.example.riskassessment.RC;

import com.example.riskassessment.DAO.Entities.Actif;
import com.example.riskassessment.Services.Interfaces.IActifService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Actifs")
public class ActifC {
    private final IActifService actifRest;

    @PostMapping("/addActif")
    Actif ajouterActif(@RequestBody Actif x){
        return actifRest.addActif(x);
    }

    @PutMapping("/updateActif")
    Actif modifierActif(@RequestBody Actif x){
        return actifRest.updateActif(x);
    }

    @DeleteMapping("/deleteActif")
    void deleteActif(Actif x){
        actifRest.deleteActif(x);
    }

    @DeleteMapping("/deleteActifById/{id}")
    void  deleteActifById(@PathVariable long id){
        actifRest.deleteActif(id);
    }

    @GetMapping("/findAllActifs/")
    List<Actif> findAll(){
        return actifRest.findAll();
    }

    @GetMapping("/findOneActifById/{id}")
    Actif findById(@PathVariable long id){
        return actifRest.findById(id);
    }

    @PutMapping("/affecterActifAGroupe")
    void affecterActifAGroupe(@RequestParam long idactif, @RequestParam long idgroupea) {
        actifRest.affecterActifAGroupe(idactif, idgroupea);
    }


}