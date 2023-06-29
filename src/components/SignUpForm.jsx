import './SignUpForm.scss';
import Input from './Input';
import Button from './Button';
import CutstomSelect from './CustomSelect';
import PlanData from '../data/plansData.json';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const setInputState = (input, isValid) => {
    isValid ? input.current.offsetParent.classList.remove('invalid') : input.current.offsetParent.classList.add('invalid');
}

const isEmailValid = (input) => {
    let isValid = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(input.current.value);

    setInputState(input, isValid);
    return isValid;
}

const isTextInpValid = (input, min, max) => {
    const inpValue = input.current.value;
    let isValid = (inpValue.length >= min && inpValue.length <= max) ? true : false;

    setInputState(input, isValid);
    return isValid;
}


function SignUpForm() {

    const inpRefs = {
        name: useRef(null),
        email: useRef(null),
        planType: useRef(null),
        phoneNo: useRef(null),
        company: useRef(null),
    }

    const navigate = useNavigate();

    const handleFormSubmint = (e) => {
        e.preventDefault();
        let canSubmit = [false, false, false, false];

        canSubmit[0] = isTextInpValid(inpRefs.name, 3, 30);
        canSubmit[1] = isEmailValid(inpRefs.email);
        canSubmit[2] = isTextInpValid(inpRefs.phoneNo, 10, 10);
        canSubmit[3] = isTextInpValid(inpRefs.company, 1, 40);

        if (canSubmit.every(elem => elem === true)) {
            // i will do nothing with form data
            // just navigate to /registered page

            navigate('/registered');
        }
    };


    return <div className="sign-up-form">
        <form method='post' onSubmit={handleFormSubmint}>
            <Input
                inpPlaceholder='Name'
                inpType='text'
                inpName='name'
                reference={inpRefs.name}
            />
            <Input
                inpPlaceholder='Email Address'
                inpType='text'
                inpName='email'
                inpMode='email'
                reference={inpRefs.email}
            />
            <CutstomSelect
                options={PlanData}
                reference={inpRefs.planType}
            />
            <Input
                inpPlaceholder='Phone Number'
                inpType='text'
                inpName='phone-no'
                inpMode='tel'
                reference={inpRefs.phoneNo}
            />
            <Input
                inpPlaceholder='Company'
                inpType='text'
                inpName='company'
                reference={inpRefs.company}
            />
            <div className="button-area">
                <Button role='submit'
                    content='Get on the list'
                    className='primary'
                />
            </div>
        </form>
    </div>
}

export default SignUpForm;