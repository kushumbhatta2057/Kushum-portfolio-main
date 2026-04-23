import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ChatWidgetLauncher from '@/components/ChatWidget';

const apiBaseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ChatWidgetLauncher
                apiBaseUrl={apiBaseUrl}
                apiKey={apiKey}
                apiSecret={apiSecret}
                title="Portfolio Assistant"
                subtitle="Kushum Bhatta"
                greeting="Hello! Feel free to ask about Kushum Bhatta's work, skills, or experience."
            />
        </div>
    );
}
