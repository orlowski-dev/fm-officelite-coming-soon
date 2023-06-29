import './SignUp.scss';
import HeaderAndIntro from '../components/HeaderAndIntro';
import Countdown from '../components/Countdown';
import SignUpForm from '../components/SignUpForm';
import FooterSignUp from '../components/FooterSignUp';

function SignUp() {
    const h1Content = 'Work smarter. Save time.';
    const pContent = 'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.';
    return <div className="sign-up-component">
        <HeaderAndIntro
            h1Content={h1Content}
            pContent={pContent}
            contentAction={<Countdown theme='light' />}
            imgFormSectionComponent={<SignUpForm />}
            forSignUp={true}
        />
        <FooterSignUp />
    </div>
}

export default SignUp;