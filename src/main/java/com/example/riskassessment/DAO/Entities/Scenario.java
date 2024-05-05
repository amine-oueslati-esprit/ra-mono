package com.example.riskassessment.DAO.Entities;

import com.example.riskassessment.DAO.Enumerations.niveau_impact;
import com.example.riskassessment.DAO.Enumerations.niveau_risque;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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
    float risqueInherentScore;
    @Enumerated
    niveau_risque risqueInherentNiveau;


    float impactReel;
    float vraisemblanceReelle;
    float risqueReelScore;
    @Enumerated
    niveau_risque risqueReelNiveau;

    float impactResiduel;
    float vraisemblanceResiduelle;
    float risqueResiduelScore;
    @Enumerated
    niveau_risque risqueResiduelNiveau;

    //Parent MO-U groupe actifs
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    List<Controle> controleList =new ArrayList<>();

}