export interface Scenario {
}
export interface Post {
    _id: number;
    idScenario: number;
    impactConfidentialite: string;
    impactIntegrite: string;
    impactDisponibilite: string;
    vraisemblanceInherente: float;
    impactInherent: float;
    risqueInherentScore: float;
    risqueInherentNiveau: string;
    impactReel: float;
    vraisemblanceReelle: float;
    risqueReelScore: float;
    risqueReelNiveau: string;
    impactResiduel: float;
    vraisemblanceResiduelle: float;
    risqueResiduelScore: float;
    risqueResiduelNiveau: string;
    controleList: string;
}



/*
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    List<Controle>  =new ArrayList<>();

*/