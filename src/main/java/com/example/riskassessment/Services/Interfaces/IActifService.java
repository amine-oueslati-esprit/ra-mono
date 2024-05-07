package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.Actif;

import java.util.List;

public interface IActifService {
    Actif addActif(Actif a);
    Actif findById(long id);
    List<Actif> findAll();
    Actif updateActif(Actif a);
    void deleteActif(long id);
    void deleteActif(Actif a);

    void affecterVulnAActif(long idactif, long idvuln);

    void affecterActifAGroupe(long idactif, long idgroupea);

}