import './HeaderAndIntro.scss';
import Logo from '/shared/logo.svg';
import PropTypes from 'prop-types';

function HeaderAndIntro({ h1Content, pContent, imgFormSectionComponent, contentAction, forSignUp }) {
    return <div className={`header-and-sign-up-component ${forSignUp ? 'for-sign-up' : ''}`}>
        <header>
            <img src={Logo} alt="app logo" />
        </header>
        <div className="container">
            <div className="img-form-section">
                {imgFormSectionComponent}
            </div>
            <div className="content">
                <h1>{h1Content}</h1>
                <p>{pContent}</p>
                {contentAction}
            </div>
        </div>
    </div>
}

HeaderAndIntro.propTypes = {
    h1Content: PropTypes.string,
    pContent: PropTypes.string,
    imgFormSectionComponent: PropTypes.node,
    contentAction: PropTypes.node,
    forSignUp: PropTypes.bool
}

export default HeaderAndIntro;