export interface Controle {
}
export interface Post {
    _id: number;
    idControle: number;
    descriptionControle: string;
    conception: float;
    performance: float;
    efficacite: float;
    ponderationSurImpact: float;
    ponderationSurProbabilite: float;
    valeurReductionImpact: float;
    valeurReductionProbabilite: float;
    existant: boolean;

}

