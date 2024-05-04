package com.example.riskassessment.DAO.Repositories;

import com.example.riskassessment.DAO.Entities.Controle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface controleRepo extends JpaRepository<Controle, Long> {
}
