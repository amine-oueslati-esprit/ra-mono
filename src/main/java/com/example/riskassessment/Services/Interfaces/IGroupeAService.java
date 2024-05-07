package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.GroupeA;

import java.util.List;

public interface IGroupeAService {
    GroupeA addGroupeA(GroupeA a);
    GroupeA findById(long id);
    List<GroupeA> findAll();
    GroupeA updateGroupeA(GroupeA a);
    void deleteGroupeA(long id);
    void deleteGroupeA(GroupeA a);

    void affecterActifAGroupe(long idactif, long idgroupe);
}
