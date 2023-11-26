import { ApiDataResp } from '@/types';
import React from 'react';

const AnimeCards = ({ data, index }: { data: ApiDataResp; index: number }) => {
    return (
        <div key={index} className="border border-red-200 rounded-lg p-3">
            <div className="font-semibold">{data.name}</div>
            <div>Episodes - {data.episodes}</div>
        </div>
    );
};

export default AnimeCards;
