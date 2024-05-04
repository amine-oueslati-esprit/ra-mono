package com.example.riskassessment.DAO.Repositories;

import com.example.riskassessment.DAO.Entities.Vulnerabilite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface vulnerabiliteRepo extends JpaRepository<Vulnerabilite, Long> {
}
