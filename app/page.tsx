import HeroSection from '@/components/HeroSection';

import AnimeSection from '@/components/AnimeSection';
async function Home() {
    return (
        <main className="max-w-4xl w-full min-h-screen py-24 mx-auto">
            <HeroSection />
            <AnimeSection />
        </main>
    );
}
export default Home;
