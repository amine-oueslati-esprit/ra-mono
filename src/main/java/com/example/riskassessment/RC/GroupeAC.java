package com.example.riskassessment.RC;

import com.example.riskassessment.DAO.Entities.GroupeA;
import com.example.riskassessment.Services.Interfaces.IGroupeAService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/GroupeA")
public class GroupeAC {
    private final IGroupeAService groupeARest;

    @PostMapping("/addGroupeA")
    GroupeA ajouterGroupeA(@RequestBody GroupeA x){
        return groupeARest.addGroupeA(x);
    }

    @PutMapping("/updateGroupeA")
    GroupeA modifierGroupeA(@RequestBody GroupeA x){
        return groupeARest.updateGroupeA(x);
    }

    @DeleteMapping("/deleteGroupeA")
    void deleteGroupeA(GroupeA x){
        groupeARest.deleteGroupeA(x);
    }

    @DeleteMapping("/deleteGroupeAById/{id}")
    void  deleteGroupeAById(@PathVariable long id){
        groupeARest.deleteGroupeA(id);
    }

    @GetMapping("/findAllGroupeAs/")
    List<GroupeA> findAll(){
        return groupeARest.findAll();
    }

    @GetMapping("/findOneGroupeAById/{id}")
    GroupeA findById(@PathVariable long id){
        return groupeARest.findById(id);
    }

    @PutMapping("/affecterActifAGroupe")
    void affecterActifAGroupe(@RequestParam long idactif, @RequestParam long idgroupea) {
        groupeARest.affecterActifAGroupe(idactif, idgroupea);
    }
}

