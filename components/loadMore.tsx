'use client';
import Image from 'next/image';
import React from 'react';
import Spinner from '@/public/spinner.svg';
import { useInView } from 'react-intersection-observer';
import { ApiDataResp } from '@/types';
import AnimeCards from './AnimeCards';
import { fetchAnime } from '@/app/actions';
let page = 2;
const LoadMore = () => {
    const { ref, inView } = useInView();
    const [data, setData] = React.useState<ApiDataResp[]>([]);
    React.useEffect(() => {
        if (inView) {
            fetchAnime(page).then((res) => [setData([...data, ...res])]);
            page++;
        }
    }, [inView]);
    return (
        <>
            <div className="grid grid-cols-3 pt-5 gap-10">
                {data?.map((elem: ApiDataResp, index: number) => (
                    <AnimeCards data={elem} index={index} />
                ))}
            </div>
            <div className="flex items-center justify-center pt-10">
                <div ref={ref}>
                    <Image src={Spinner} alt="loading..." height={40} />
                </div>
            </div>
        </>
    );
};
export default LoadMore;
