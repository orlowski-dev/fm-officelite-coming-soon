import './DesignSystem.scss';
import AppLogo from '/shared/logo.svg';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import CustomSelect from '../components/CustomSelect';

const ColorPreview = ({ colorName, colorHex }) => {
    return <div className="color">
        <div className="preview" style={{ backgroundColor: colorHex }}></div>
        <div>
            <h3>{colorName}</h3>
            <p>{colorHex}</p>
        </div>
    </div>
}

ColorPreview.propTypes = {
    colorName: PropTypes.string,
    colorHex: PropTypes.string
}

function DesignSystem() {

    const allColors = [
        { name: 'purple-1', hex: '#5175ff' },
        { name: 'purple-2', hex: '#829cff' },
        { name: 'dark-1', hex: '#333950' },
        { name: 'dark-2', hex: '#25293a' },
        { name: 'grey-1', hex: '#747b95' },
        { name: 'red-1', hex: '#f05b5b' },
        { name: 'white', hex: '#ffffff' },
        { name: 'light-bg', hex: '#fafafa' },
    ]

    const colorPreviewToRender = allColors.map((color, index) => {
        return <ColorPreview colorName={color.name} colorHex={color.hex} key={index} />
    })

    return <div className="design-system-component">
        <header>
            <img src={AppLogo} alt="app logo" />
            <h1>Design System</h1>
        </header>
        <section className="colors-section">
            <h2>Colors</h2>
            <div className="content">
                {colorPreviewToRender}
            </div>
        </section>
        <section className="typography-section">
            <h2>Typography</h2>
            <div className="font-preview">
                <div>
                    <h2>Kumbh Sans</h2>
                </div>
                <div>
                    <p>
                        <span>ABCDEFGHIJKLMNOPQRESTUVWXYZ</span>
                        abcdefghijklmnipqrestuvwxyz1234567890!@#$%^&*()
                    </p>
                </div>
            </div>
        </section>
        <section className="buttons-section">
            <h2>Buttons</h2>
            <div className="content">
                <div className="preview">
                    <Button className='primary' content='Button Primary' role='button' />
                </div>
                <div className="preview">
                    <Button className='secondary' content='Button Secondary' role='button' />
                </div>
                <div className="preview purple">
                    <Button className='white' content='Button White' role='button' />
                </div>
            </div>
        </section>
        <section className="form-elems-section">
            <h2>Form Elements</h2>
            <div className="content">
                <div className="preview">
                    <Input
                        inpType='text'
                        inpPlaceholder='Text Field'
                    />
                </div>
                <div className="preview">
                    <Input
                        inpType='text'
                        inpPlaceholder='Text Field'
                        inpDefValue='Text Field Filed'
                    />
                </div>
                <div className="preview">
                    <Input
                        inpType='text'
                        inpPlaceholder='Text Field Invalid'
                        inpClassName='invalid'
                        inpIsInvalid={true}
                        inpDefValue='Text Field Invalid'
                    />
                </div>
                <div className="preview">
                    <CustomSelect options={[
                        { name: 'Basic', price: 'Free' },
                        { name: 'Pro', price: '$9.99' },
                        { name: 'Ultimate', price: '$19.99' },
                    ]} />
                </div>
            </div>
        </section>
    </div>
}

export default DesignSystem;