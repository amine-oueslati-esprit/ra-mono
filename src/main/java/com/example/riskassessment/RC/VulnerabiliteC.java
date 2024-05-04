package com.example.riskassessment.RC;

import com.example.riskassessment.DAO.Entities.Vulnerabilite;
import com.example.riskassessment.Services.Interfaces.IVulnerabiliteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Vulnerabilites")
public class VulnerabiliteC {
    private final IVulnerabiliteService VulnerabiliteRest;

    @PostMapping("/addVulnerabilite")
    Vulnerabilite ajouterVulnerabilite(@RequestBody Vulnerabilite x){
        return VulnerabiliteRest.addVulnerabilite(x);
    }

    @PutMapping("/updateVulnerabilite")
    Vulnerabilite modifierVulnerabilite(@RequestBody Vulnerabilite x){
        return VulnerabiliteRest.updateVulnerabilite(x);
    }

    @DeleteMapping("/deleteVulnerabilite")
    void deleteVulnerabilite(Vulnerabilite x){
        VulnerabiliteRest.deleteVulnerabilite(x);
    }

    @DeleteMapping("/deleteVulnerabiliteById/{id}")
    void  deleteVulnerabiliteById(@PathVariable long id){
        VulnerabiliteRest.deleteVulnerabilite(id);
    }

    @GetMapping("/findAllVulnerabilites/")
    List<Vulnerabilite> findAll(){
        return VulnerabiliteRest.findAll();
    }

    @GetMapping("/findOneVulnerabiliteById/{id}")
    Vulnerabilite findById(@PathVariable long id){
        return VulnerabiliteRest.findById(id);
    }
}
