export type ISpecie = {
    name: string
    classification: string
    designation: string
}

export type IHomeworld = {
    name: string
}

export type ICharacter = {
    name: string
    species: string[]
    homeworld: string
}

export type IListResponse<T> = {
    count: number
    next: string | null
    previous: string | null
    results: T
}
