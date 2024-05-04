package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.GroupeA;
import com.example.riskassessment.DAO.Entities.Projet;
import com.example.riskassessment.DAO.Repositories.groupeARepo;
import com.example.riskassessment.DAO.Repositories.projetRepo;
import com.example.riskassessment.Services.Interfaces.IProjetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjetService implements IProjetService {
    private final projetRepo pRepo;
    private final groupeARepo gRepo;


    @Override
    public Projet addProjet(Projet a) {
        return pRepo.save(a);
    }

    @Override
    public Projet findById(long id) {return pRepo.findById(id).get();
    }

    @Override
    public List<Projet> findAll() {
        return pRepo.findAll();
    }

    @Override
    public Projet updateProjet(Projet a) {
        return pRepo.save(a);
    }

    @Override
    public void deleteProjet(long id) {
        pRepo.deleteById(id);

    }

    @Override
    public void deleteProjet(Projet a) {
        pRepo.delete(a);

    }

    @Override
    public void affecterGroupeAProjet(long idgroupea, long idprojet) {
        GroupeA groupeA= gRepo.findById(idgroupea).get(); //child
        Projet projet= pRepo.findById(idprojet).get(); //parent
        //On affecte le child au parent
        projet.getGroupesA().add(groupeA);
        pRepo.save(projet);
    }
}
