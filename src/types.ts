export type User = {
    id?: string;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    avatar: string;
    rank?: number;
    points: number;
    fish: [Fish];
};

export type Fish = {
    id: number;
    length: number;
    points: number;
    species: FishSpecies;
    target: boolean;
};

enum FishSpecies {
    "Barsch",
    "Hecht",
    "Karpfen",
    "Salmonide",
    "Waller",
    "Weißfisch",
    "Zander",
}
