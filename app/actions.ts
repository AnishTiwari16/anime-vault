'use server';
import { BASE_URL } from '@/config';
export const fetchAnime = async (page: number) => {
    const response = await fetch(
        `${BASE_URL}/animes?page=${page}&limit=8&order=popularity`
    );
    const data = await response.json();
    return data;
};
