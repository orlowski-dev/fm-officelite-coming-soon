import './CustomSelect.scss';
import ArrowDownIcon from '../assets/sign-up/icon-arrow-down.svg';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function CustomSelect({ options, reference }) {

    const handleCurrSelected = () => {

        if (!areOptionsVisible) {
            selectOptions.current.classList.add('visible');
            selectIcon.current.classList.add('rotated');
        } else {
            selectOptions.current.classList.remove('visible');
            selectIcon.current.classList.remove('rotated');
        }

        setAreOptionsVisible(!areOptionsVisible);
    }

    const removeSelectedClassFromOptions = () => document.querySelectorAll('.custom-select-area .options .option').forEach(element => element.classList.remove('selected'));

    const handleOptionClick = (e) => {
        removeSelectedClassFromOptions();
        e.currentTarget.classList.add('selected');
        setSelectSelectedValuse(options[e.currentTarget.id]);
        setPlanTypeInputValue(options[e.currentTarget.id].name.toLowerCase())
    }


    const [selectSelectedValues, setSelectSelectedValuse] = useState({});
    const [areOptionsVisible, setAreOptionsVisible] = useState(false);
    const selectIcon = useRef(null);
    const selectOptions = useRef(null);
    const [planTypeInputValue, setPlanTypeInputValue] = useState(options[0].name.toLowerCase());
    const optionsToRender = options.map((option, index) => {
        return <div
            className={`option ${index == 0 ? 'selected' : ''}`}
            key={index}
            id={index}
            onClick={handleOptionClick}>
            <p>
                {option.name || 'Plan name'} <span>{option.price || 'Plan price'}</span>
            </p>
        </div>
    })

    // set selectSelectedVasluse on page load
    useEffect(() => {
        setSelectSelectedValuse(options[0]);
    }, [options]);

    return <div className="custom-select-area">
        <div className="curr-selected" onClick={handleCurrSelected}>
            <div>
                <input type="hidden" name="planType" value={planTypeInputValue} ref={reference} />
                <p>
                    {selectSelectedValues.name} <span>{selectSelectedValues.price}</span>
                </p>
            </div>
            <div className='select-icon'>
                <img src={ArrowDownIcon} alt="arrow icon" ref={selectIcon} className='rotated' />
            </div>
        </div>
        <div className="options" ref={selectOptions}>
            {optionsToRender}
        </div>
    </div>
}

CustomSelect.propTypes = {
    options: PropTypes.array,
    reference: PropTypes.object
}

export default CustomSelect;