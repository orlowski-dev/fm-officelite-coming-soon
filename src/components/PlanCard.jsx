import './PlanCard.scss';
import PropTypes from 'prop-types';
import Button from './Button';

function PlanCard({ planName, planPrice, planLimitations, planFeatures, highlighted }) {

    const signUpPageUrl = '/sign-up';
    const button = highlighted ? <Button
        isLink={true}
        linkTo={signUpPageUrl}
        className='white'
        content='Try for Free'
    /> : <Button
        isLink={true}
        linkTo={signUpPageUrl}
        className='secondary'
        content='Try for Free'
    />

    return <div className={`plan-card-component ${highlighted ? 'highlighted' : ''}`}>
        <div className="name-n-price">
            <h2>{planName || 'Plan name'}</h2>
            <h3>{planPrice || '$0.00'}</h3>
            <p>{planLimitations || 'Plan limitations'}</p>
        </div>
        <div className="features">
            <ul>
                {planFeatures?.map((elem, index) => {
                    return <li key={index}>{elem}</li>
                }) || 'Features'}
            </ul>
        </div>
        <div className="button-area">
            {button}
        </div>
    </div>
}

PlanCard.propTypes = {
    planName: PropTypes.string,
    planPrice: PropTypes.string,
    planLimitations: PropTypes.string,
    planFeatures: PropTypes.array,
    highlighted: PropTypes.bool
}

export default PlanCard;