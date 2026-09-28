export const alfabeto = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ] as const;

export type Alfabeto = typeof alfabeto[number]
    

export type ArtistsData = Record<Alfabeto, ArtistData[]>

export type ArtistData = {
    name: string,
    age: Age,
    bio: string,
    professions: string[]
    works: Works[],
    legacy: string,
    idImgs: string,
    letter: Alfabeto
}

export type Age = {
    birth: string,
    death: string | null
}

export type Works = {
    title: string,
    description: string
}

