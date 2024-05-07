package com.example.riskassessment.DAO.Repositories;

import com.example.riskassessment.DAO.Entities.Menace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface menaceRepo extends JpaRepository<Menace, Long> {
}
