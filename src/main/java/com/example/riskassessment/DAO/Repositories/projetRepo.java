package com.example.riskassessment.DAO.Repositories;
import com.example.riskassessment.DAO.Entities.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface projetRepo extends JpaRepository<Projet, Long>{
}
