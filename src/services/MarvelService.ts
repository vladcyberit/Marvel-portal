import { API_BASE, API_KEY } from "../config";

interface Character {
    id: number
    name: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
    urls: {
        url: string
    }[]
    comics: {
        items: string[]
    }
}

export interface CharacterDetailed {
    id: number
    name: string
    description: string
    thumbnail: string
    homepage: string
    wiki: string
    comics: {
        items: string[]
    }
}

async function fetchFromMarvel<T>(endpoint: string): Promise<T[]> {
    const res = await fetch(`${API_BASE}${endpoint}apikey=${API_KEY}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    return data.data.results;
}

export async function getAllCharacters(): Promise<CharacterDetailed[]> {
    const res = await fetchFromMarvel<Character>("characters?limit=9&");
    return res.map(transformChar);
}

export async function getCharacterByID(id: number): Promise<CharacterDetailed> {
    const res = await fetchFromMarvel<Character>(`characters/${id}?`);
    const char = res[0];
    return transformChar(char);
}

const transformChar = (char: Character): CharacterDetailed => {
    return {
        id: char.id,
        name: char.name,
        description: char.description || "Sorry, description is not available at the moment!",
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
        homepage: char.urls[0]?.url || "",
        wiki: char.urls[1]?.url || "",
        comics: char.comics
    }
}