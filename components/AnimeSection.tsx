import { fetchAnime } from '@/app/actions';
import React from 'react';
import AnimeCards from './AnimeCards';
import { ApiDataResp } from '@/types';

const AnimeSection = async () => {
    const data = await fetchAnime(1);
    console.log(data);
    return (
        <div className="pt-5">
            <div>Explore Animes</div>
            <div className="grid grid-cols-3 pt-5 gap-10">
                {data?.map((elem: ApiDataResp, index: number) => (
                    <AnimeCards data={elem} index={index} />
                ))}
            </div>
        </div>
    );
};

export default AnimeSection;
