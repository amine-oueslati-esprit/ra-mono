package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.Vulnerabilite;

import java.util.List;

public interface IVulnerabiliteService {
    Vulnerabilite addVulnerabilite(Vulnerabilite x);
    Vulnerabilite findById(long id);
    List<Vulnerabilite> findAll();
    Vulnerabilite updateVulnerabilite(Vulnerabilite x);
    void deleteVulnerabilite(long id);
    void deleteVulnerabilite(Vulnerabilite x);
}
