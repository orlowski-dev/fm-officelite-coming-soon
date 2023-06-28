import './Home.scss';
import Cta from '../components/Cta';
import PlanCard from '../components/PlanCard';
import PlanData from '../data/plansData.json';
import FooterHome from '../components/FooterHome';

function Home() {

    const h1Content = 'A simple solution to complex tasks is coming soon';
    const pContent = 'Say goodbye to inefficient juggling of multiple app, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve producivity.'
    const planNameToHighlight = 'Pro';
    const planCards = PlanData?.map((plan, index) => {
        return <PlanCard
            key={index}
            planName={plan.name}
            planPrice={plan.price}
            planLimitations={plan.limitations}
            planFeatures={plan.features}
            highlighted={plan.name === planNameToHighlight ? true : false}
        />
    });

    return <div className="home-component">
        <Cta
            h1Content={h1Content}
            pContent={pContent}
            version='home'
        />
        <div className="plan-cards-container">
            {planCards}
        </div>
        <FooterHome />
    </div>
}

export default Home;