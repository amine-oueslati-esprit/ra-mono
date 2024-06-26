package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Actif;
import com.example.riskassessment.DAO.Entities.GroupeA;
import com.example.riskassessment.DAO.Repositories.actifRepo;
import com.example.riskassessment.DAO.Repositories.groupeARepo;
import com.example.riskassessment.Services.Interfaces.IGroupeAService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupeAService implements IGroupeAService {
    private final groupeARepo gRepo;
    private final actifRepo aRepo;


    @Override
    public GroupeA addGroupeA(GroupeA a) {
        return gRepo.save(a);
    }

    @Override
    public GroupeA findById(long id) {return gRepo.findById(id).get();
    }

    @Override
    public List<GroupeA> findAll() {
        return gRepo.findAll();
    }

    @Override
    public GroupeA updateGroupeA(GroupeA a) {
        return gRepo.save(a);
    }

    @Override
    public void deleteGroupeA(long id) {
        gRepo.deleteById(id);

    }

    @Override
    public void deleteGroupeA(GroupeA a) {
        gRepo.delete(a);

    }

    @Override
    public void affecterActifAGroupe(long idactif, long idgroupe) {
        Actif actif= aRepo.findById(idactif).get(); //child
        GroupeA groupe= gRepo.findById(idgroupe).get();//parent
        //On affecte le child au parent
        groupe.getActifList().add(actif);
        gRepo.save(groupe);
    }
}
