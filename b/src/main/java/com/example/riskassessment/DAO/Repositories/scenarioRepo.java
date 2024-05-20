package com.example.riskassessment.DAO.Repositories;

import com.example.riskassessment.DAO.Entities.Scenario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface scenarioRepo extends JpaRepository<Scenario, Long> {
}
