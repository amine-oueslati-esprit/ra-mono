package com.example.riskassessment.DAO.Entities;

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
public class Controle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    long idControle;

    String descriptionControle;

    @Enumerated
    com.example.riskassessment.DAO.Enumerations.typeControle typeControle;

    float conception;

    float performance;

    float efficacite;

    float ponderationSurImpact;

    float ponderationSurProbabilite;

    float valeurReductionImpact;

    float valeurReductionProbabilite;

    boolean existant;

}
