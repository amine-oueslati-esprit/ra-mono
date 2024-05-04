package com.example.riskassessment.RC;

import com.example.riskassessment.DAO.Entities.Controle;
import com.example.riskassessment.Services.Interfaces.IControleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Controles")
public class ControleC {
    private final IControleService ControleRest;

    @PostMapping("/addControle")
    Controle ajouterControle(@RequestBody Controle x){
        return ControleRest.addControle(x);
    }

    @PutMapping("/updateControle")
    Controle modifierControle(@RequestBody Controle x){
        return ControleRest.updateControle(x);
    }

    @DeleteMapping("/deleteControle")
    void deleteControle(Controle x){
        ControleRest.deleteControle(x);
    }

    @DeleteMapping("/deleteControleById/{id}")
    void  deleteControleById(@PathVariable long id){
        ControleRest.deleteControle(id);
    }

    @GetMapping("/findAllControles/")
    List<Controle> findAll(){
        return ControleRest.findAll();
    }

    @GetMapping("/findOneControleById/{id}")
    Controle findById(@PathVariable long id){
        return ControleRest.findById(id);
    }
}