import { Link } from 'react-router-dom';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({ className, role, linkTo, content }) {
    return <Link to={linkTo} role={role} className={`button ${className}`}>
        {content}
    </Link>
}

Button.propTypes = {
    className: PropTypes.string,
    role: PropTypes.string,
    linkTo: PropTypes.string,
    content: PropTypes.string
}


export default Button;