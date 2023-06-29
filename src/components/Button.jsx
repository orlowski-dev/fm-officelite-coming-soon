import { Link } from 'react-router-dom';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({ className, role, linkTo, content, isLink }) {
    return isLink ? <Link to={linkTo} role={role} className={`button ${className}`}>
        {content}
    </Link> : <button role={role} className={`button ${className}`}>{content}</button>
}

Button.propTypes = {
    className: PropTypes.string,
    role: PropTypes.string,
    linkTo: PropTypes.string,
    content: PropTypes.string,
    isLink: PropTypes.string
}


export default Button;