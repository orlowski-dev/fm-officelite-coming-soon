import './Cta.scss';
import Logo from '/shared/logo.svg';
import ChartsIllustration from '../assets/home/illustration-charts.svg';
import PropTypes from 'prop-types';
import Button from './Button';

function Cta({ h1Content, pContent, version }) {
    return <div className="cta-component">
        <header>
            <img src={Logo} alt="app logo" />
        </header>
        <div className="container">
            <div className="img-countdown-section">
                <img src={ChartsIllustration} alt="charts illustration" />
            </div>
            <div className="content">
                <h1>{h1Content}</h1>
                <p>{pContent}</p>
                {version === 'home' && <div><Button className='primary' linkTo='/' content='Get Started' /></div>}
            </div>
        </div>
    </div>
}

Cta.propTypes = {
    h1Content: PropTypes.string,
    pContent: PropTypes.string,
    version: PropTypes.string
}

export default Cta;