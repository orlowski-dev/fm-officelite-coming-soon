import './Input.scss';
import PropTypes from 'prop-types';

function Input({ inpType, inpPlaceholder, inpIsInvalid, inpDefValue, inpName, inpMode, reference, props }) {
    return <div className={`input-area ${inpIsInvalid ? 'invalid' : ''}`}>
        <input
            type={inpType}
            placeholder={inpPlaceholder}
            className='input'
            defaultValue={inpDefValue}
            name={inpName}
            inputMode={inpMode || undefined}
            ref={reference}
            autoComplete='off'
            {...props}
        />
    </div>
}

Input.propTypes = {
    inpType: PropTypes.string,
    inpPlaceholder: PropTypes.string,
    inpIsInvalid: PropTypes.bool,
    inpDefValue: PropTypes.string,
    inpName: PropTypes.string,
    inpMode: PropTypes.string,
    reference: PropTypes.object,
    props: PropTypes.any
}

export default Input;