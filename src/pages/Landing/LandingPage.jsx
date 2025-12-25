import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';
import Navigation from './Navigation ';

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <div id='hero'>
                <Hero />
            </div>
            <div id='features'>
                <Features />
            </div>
            <div id='cta'>
                <CTA />
            </div>
        </div>

    )
}

export default LandingPage
