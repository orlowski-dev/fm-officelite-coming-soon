import './Home.scss';
import HeaderAndIntro from '../components/HeaderAndIntro';
import PlanCard from '../components/PlanCard';
import PlanData from '../data/plansData.json';
import FooterHome from '../components/FooterHome';
import ChartsIllustration from '../assets/home/illustration-charts.svg';
import Button from '../components/Button';

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

    const img = <img src={ChartsIllustration} alt='charts illustration' />;
    const button = <div><Button className='primary' linkTo='/' content='Get Started' /></div>;

    return <div className="home-component">
        <HeaderAndIntro
            h1Content={h1Content}
            pContent={pContent}
            imgFormSectionComponent={img}
            contentAction={button}
        />
        <div className="plan-cards-container">
            {planCards}
        </div>
        <FooterHome />
    </div>
}

export default Home;