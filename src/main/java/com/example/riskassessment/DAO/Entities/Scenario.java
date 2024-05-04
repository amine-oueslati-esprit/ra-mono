package com.example.riskassessment.DAO.Entities;

import com.example.riskassessment.DAO.Enumerations.niveau_impact;
import com.example.riskassessment.DAO.Enumerations.niveau_risque;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Scenario implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    long idScenario;

    @Enumerated
    niveau_impact impactConfidentialite;

    @Enumerated
    niveau_impact impactIntegrite;

    @Enumerated
    niveau_impact impactDisponibilite;

    float vraisemblanceInherente;

    float impactInherent;

    @Enumerated
    niveau_risque risqueInherentNiveau;

    float risqueInherentScore;

    float impactReel;

    float vraisemblanceReelle;

    float risqueReelScore;

    @Enumerated
    niveau_risque risqueReelNiveau;

    float impactResiduel;

    float vraisemblanceResiduelle;

    float risque_residuelScore;

    @Enumerated
    niveau_risque risqueResiduelNiveau;



}