export interface Character {
    name: string;
    gender: string;
    status: string;
}

export const EmptyCharacter: Character = {
    name: "",
    gender: "",
    status: "",
};