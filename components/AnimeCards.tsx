import { ApiDataResp } from '@/types';
import React from 'react';

const AnimeCards = ({ data, index }: { data: ApiDataResp; index: number }) => {
    return (
        <div key={index}>
            <div>{data.name}</div>
            <div>{data.episodes}</div>
        </div>
    );
};

export default AnimeCards;
