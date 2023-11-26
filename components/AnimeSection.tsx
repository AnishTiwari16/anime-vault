import { fetchAnime } from '@/app/actions';
import React from 'react';
import AnimeCards from './AnimeCards';
import { ApiDataResp } from '@/types';
import LoadMore from './loadMore';

const AnimeSection = async () => {
    //as adding use state will call for client side and we are using server side for fetcing
    const data = await fetchAnime(1);
    return (
        <div className="pt-5">
            <div className="font-semibold text-xl">Explore Animes</div>
            <div className="grid grid-cols-3 pt-5 gap-10">
                {data?.map((elem: ApiDataResp, index: number) => (
                    <AnimeCards data={elem} index={index} />
                ))}
            </div>
            <LoadMore />
        </div>
    );
};

export default AnimeSection;
