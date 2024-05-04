package com.example.riskassessment.DAO.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity

public class Menace implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    long idmenace;

    String desc_menace;

    //OO-U
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    Scenario scenario;
}
