package com.example.riskassessment.DAO.Entities;

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

public class Vulnerabilite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    long idvulnerabilite;

    String descriptionVulnerabilite;

    //MM-B actifs concernes
    //child
    @JsonIgnore
    @ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER, mappedBy="vulnerabilites")
    List<Actif> actifsconcernes=new ArrayList<>();


    //OO-U
    @OneToOne (cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    Menace menace;
}
