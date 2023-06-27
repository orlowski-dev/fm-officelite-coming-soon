import './Input.scss';
import PropTypes from 'prop-types';

function Input({ inpType, inpPlaceholder, inpIsInvalid, inpDefValue }) {
    return <div className={`input-area ${inpIsInvalid ? 'invalid' : ''}`}>
        <input
            type={inpType}
            placeholder={inpPlaceholder}
            className='input'
            defaultValue={inpDefValue}
        />
    </div>
}

Input.propTypes = {
    inpType: PropTypes.string,
    inpPlaceholder: PropTypes.string,
    inpIsInvalid: PropTypes.bool,
    inpDefValue: PropTypes.string
}

export default Input;