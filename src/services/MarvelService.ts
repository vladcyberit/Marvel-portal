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

async function fetchFromMarvel<T>(endpoint: string): Promise<T[]> {
    const res = await fetch(`${API_BASE}${endpoint}apikey=${API_KEY}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    return data.data.results;
}

export function getAllCharacters() {
    return fetchFromMarvel<Character>("characters?limit=9&");
}

export function getCharacterByID(id: number) {
    return fetchFromMarvel<Character>(`characters/${id}?`);
}