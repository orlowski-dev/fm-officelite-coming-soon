import './SignUpForm.scss';
import Input from './Input';
import Button from './Button';
import CutstomSelect from './CustomSelect';
import PlanData from '../data/plansData.json';

function SignUpForm() {

    const planData = PlanData;

    return <div className="sign-up-form">
        <form action="">
            <Input
                inpPlaceholder='Name'
                inpType='text'
                inpName='name'
            />
            <Input
                inpPlaceholder='Email Address'
                inpType='text'
                inpName='email'
            />
            <CutstomSelect
                options={planData}
            />
            <Input
                inpPlaceholder='Phone Number'
                inpType='text'
                inpName='phone-no'
            />
            <Input
                inpPlaceholder='Company'
                inpType='text'
                inpName='company'
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