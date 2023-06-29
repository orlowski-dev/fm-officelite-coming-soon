import './Input.scss';
import PropTypes from 'prop-types';

function Input({ inpType, inpPlaceholder, inpIsInvalid, inpDefValue, inpName }) {
    return <div className={`input-area ${inpIsInvalid ? 'invalid' : ''}`}>
        <input
            type={inpType}
            placeholder={inpPlaceholder}
            className='input'
            defaultValue={inpDefValue}
            name={inpName}
        />
    </div>
}

Input.propTypes = {
    inpType: PropTypes.string,
    inpPlaceholder: PropTypes.string,
    inpIsInvalid: PropTypes.bool,
    inpDefValue: PropTypes.string,
    inpName: PropTypes.string
}

export default Input;