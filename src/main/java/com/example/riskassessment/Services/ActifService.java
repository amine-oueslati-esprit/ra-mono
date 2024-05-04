package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Actif;
import com.example.riskassessment.DAO.Entities.GroupeA;
import com.example.riskassessment.DAO.Repositories.actifRepo;
import com.example.riskassessment.DAO.Repositories.groupeARepo;
import com.example.riskassessment.Services.Interfaces.IActifService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActifService implements IActifService {
    private final actifRepo aRepo;
    private final groupeARepo gRepo;

    @Override
    public Actif addActif(Actif a) {
        return aRepo.save(a);
    }

    @Override
    public Actif findById(long id) {return aRepo.findById(id).get();
    }

    @Override
    public List<Actif> findAll() {
        return aRepo.findAll();
    }

    @Override
    public Actif updateActif(Actif a) {
        return aRepo.save(a);
    }

    @Override
    public void deleteActif(long id) {
        aRepo.deleteById(id);

    }

    @Override
    public void deleteActif(Actif a) {
        aRepo.delete(a);

    }

    @Override
    public void affecterActifAGroupe(long idactif, long idgroupea) {
        Actif actif=aRepo.findById(idactif).get(); //child
        GroupeA groupe=gRepo.findById(idgroupea).get();//parent
        //On affecte le child au parent
        groupe.getActifList().add(actif);
        gRepo.save(groupe);
    }
}