import './Home.scss';
import Cta from '../components/Cta';

function Home() {

    const h1Content = 'A simple solution to complex tasks is coming soon';
    const pContent = 'Say goodbye to inefficient juggling of multiple app, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve producivity.'

    return <div className="home-component">
        <Cta
            h1Content={h1Content}
            pContent={pContent}
            version='home'
        />
    </div>
}

export default Home;