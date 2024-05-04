package com.example.riskassessment.DAO.Entities;

import com.example.riskassessment.DAO.Enumerations.criticite;
import com.example.riskassessment.DAO.Enumerations.typeActif;
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

public class Actif implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    long idactif;

    @Enumerated
    typeActif atype;

    String areference;

    String alocalisation;

    @Enumerated
    criticite criticite_confidentialite;

    @Enumerated
    criticite criticite_integrite;

    @Enumerated
    criticite criticite_disponibilite;

    @Enumerated
    criticite criticite_valeur_actif;

    //MM-B vulnerabilites
    //parent
    @JsonIgnore
    @ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
    List<Vulnerabilite> vulnerabilites =new ArrayList<Vulnerabilite>();

    //MM-B groupe actifs
    //child
    @JsonIgnore
    @ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER, mappedBy="actifList")
    List <GroupeA> groupeAList=new ArrayList<GroupeA>();

}