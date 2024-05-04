package com.example.riskassessment.RC;

import com.example.riskassessment.DAO.Entities.Projet;
import com.example.riskassessment.Services.Interfaces.IProjetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Projets")
public class ProjetC {
    private final IProjetService projetRest;

    @PostMapping("/addProjet")
    Projet ajouterProjet(@RequestBody Projet x){
        return projetRest.addProjet(x);
    }

    @PutMapping("/updateProjet")
    Projet modifierProjet(@RequestBody Projet x){
        return projetRest.updateProjet(x);
    }

    @DeleteMapping("/deleteProjet")
    void deleteProjet(Projet x){
        projetRest.deleteProjet(x);
    }

    @DeleteMapping("/deleteProjetById/{id}")
    void  deleteProjetById(@PathVariable long id){
        projetRest.deleteProjet(id);
    }

    @GetMapping("/findAllProjets/")
    List<Projet> findAll(){
        return projetRest.findAll();
    }

    @GetMapping("/findOneProjetById/{id}")
    Projet findById(@PathVariable long id){
        return projetRest.findById(id);
    }

    @PutMapping("/ affecterGroupeAProjet")
    void  affecterGroupeAProjet(@RequestParam long idgroupea, @RequestParam long idprojet) {
        projetRest. affecterGroupeAProjet(idgroupea,idprojet);
    }
}