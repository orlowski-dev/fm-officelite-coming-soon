import './CustomSelect.scss';
import ArrowDownIcon from '../assets/sign-up/icon-arrow-down.svg';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


function CustomSelect({ options, reference }) {

    const toggleOptionsVisibility = () => {
        if (!areOptionsVisible) {
            selectOptions.current.classList.add('visible');
            selectIcon.current.classList.add('rotated');
        } else {
            selectOptions.current.classList.remove('visible');
            selectIcon.current.classList.remove('rotated');
        }

        setAreOptionsVisible(!areOptionsVisible);
    }

    const handleCurrSelected = () => {
        toggleOptionsVisibility();
    }

    const removeSelectedClassFromOptions = () => document.querySelectorAll('.custom-select-area .options .option').forEach(element => element.classList.remove('selected'));

    const handleOptionClick = (e) => {
        removeSelectedClassFromOptions();
        e.currentTarget.classList.add('selected');
        setSelectSelectedValuse(options[e.currentTarget.id]);
        setPlanTypeInputValue(options[e.currentTarget.id].name.toLowerCase())
        toggleOptionsVisibility();
    }

    const handleHiddenInputFocus = (e) => {
        toggleOptionsVisibility();
        // set focus on first option
        e.target.offsetParent.querySelectorAll('.option')[0].focus()
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
            onClick={handleOptionClick}
            onKeyDown={(e) => {

                // select option using keyboard
                if (e.key === 'Enter' || e.key === ' ') {
                    handleOptionClick(e);
                }

                // hide select options on Escape key pressed
                if (e.key === 'Escape' && areOptionsVisible) {
                    toggleOptionsVisibility();
                }
            }}
            tabIndex={0}
            onFocus={(e) => {
                removeSelectedClassFromOptions();
                e.target.classList.add('selected');
            }}
            onBlur={(e) => {
                // hide option after tabbing on the last element
                if (Number(e.target.id) === (optionsToRender.length - 1)) {
                    selectOptions.current.classList.remove('visible');
                    selectIcon.current.classList.remove('rotated');
                    setAreOptionsVisible(false);
                }
            }}
        >
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
                <input
                    type="text"
                    name="planType"
                    className='visually-hidden'
                    defaultValue={planTypeInputValue}
                    ref={reference}
                    onFocus={handleHiddenInputFocus}
                />
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