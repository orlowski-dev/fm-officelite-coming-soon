import './FooterHome.scss';
import HeartIcon from '../assets/heart-svgrepo-com.svg';
import ViteLogo from '../assets/vite.svg';
import ReactLogo from '../assets/react.svg';
import Countdown from './Countdown';
import Button from './Button';

function FooterHome() {
    return <footer>
        <div className="bg"></div>
        <div className="countdown-section">
            <Countdown />
            <div className="button-area">
                <Button className='primary' linkTo='/' content='Get Started' />
            </div>
        </div>
        <div className="attribution-section">
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/orlowski-dev">@orlowski-dev</a>.
            </div>
            <div className="created-with">
                <p>
                    Created with
                    <img src={HeartIcon} alt="heart icon" />
                    +
                    <img src={ViteLogo} alt='vite logo' />
                    +
                    <img src={ReactLogo} alt='react logo' />
                </p>
            </div>
        </div>
    </footer>
}

export default FooterHome;