package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.Menace;

import java.util.List;

public interface IMenaceService {
    Menace addMenace(Menace a);
    Menace findById(long id);
    List<Menace> findAll();
    Menace updateMenace(Menace a);
    void deleteMenace(long id);
    void deleteMenace(Menace a);

    void affecterMenaceAVuln(long idvuln, long idmenace);
    
    
}