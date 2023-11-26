import Image from 'next/image';
import React from 'react';
import InstagramIcon from '@/public/instagram.svg';
import TwitterIcon from '@/public/twitter.svg';
import AnimeLogo from '@/public/logo.svg';
const Footer = () => {
    return (
        <div className="bg-[#161921] w-full flex items-center justify-between py-3 px-16">
            <div>@2023 EpicAnimeVault</div>
            <Image src={AnimeLogo} alt="anime_logo" />
            <div className="flex items-center gap-6">
                <Image src={InstagramIcon} alt="instagram_icon" />
                <Image src={TwitterIcon} alt="instagram_icon" />
            </div>
        </div>
    );
};

export default Footer;
