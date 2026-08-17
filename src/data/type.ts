export type Alfabeto =
    | "A" | "B" | "C" | "D" | "E" | "F" | "G"
    | "H" | "I" | "J" | "K" | "L" | "M" | "N"
    | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
    | "V" | "W" | "X" | "Y" | "Z";

export type ArtistsData = Record<Alfabeto, ArtistData[]>

export type ArtistData = {
    name: string,
    age: string,
    bio: string,
    professions: string[]
    works: Works[]
}

export type Works = {
    text: string,
    description: string
}

