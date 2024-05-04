package com.example.riskassessment.Services.Interfaces;

import com.example.riskassessment.DAO.Entities.Controle;

import java.util.List;

public interface IControleService {
    Controle addControle(Controle x);
    Controle findById(long id);
    List<Controle> findAll();
    Controle updateControle(Controle x);
    void deleteControle(long id);
    void deleteControle(Controle x);
}