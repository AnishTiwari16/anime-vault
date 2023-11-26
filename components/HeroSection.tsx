import Image from 'next/image';
import React from 'react';
import AnimeLogo from '@/public/logo.svg';
import AnimeImage from '@/public/anime.png';
const HeroSection = () => {
    return (
        <div className="grid grid-cols-2 bg-image bg-no-repeat bg-cover bg-center">
            <div>
                <Image src={AnimeLogo} alt="logo" />
                <div>Explore The Diverse Realms of Anime Magic</div>
            </div>
            <Image src={AnimeImage} alt="anime_image" />
        </div>
    );
};

export default HeroSection;
