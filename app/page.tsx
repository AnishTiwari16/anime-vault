import HeroSection from '@/components/HeroSection';
import { fetchAnime } from './actions';
async function Home() {
    const data = await fetchAnime(1);
    console.log(data);
    return (
        <main className="max-w-4xl w-full min-h-screen py-24 mx-auto">
            <HeroSection />
        </main>
    );
}
export default Home;
