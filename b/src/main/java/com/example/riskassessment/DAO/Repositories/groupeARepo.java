package com.example.riskassessment.DAO.Repositories;
import com.example.riskassessment.DAO.Entities.GroupeA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface groupeARepo extends JpaRepository<GroupeA, Long> {

}
