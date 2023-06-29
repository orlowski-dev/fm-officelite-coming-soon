import { useEffect, useState } from 'react';
import './Countdown.scss';
import PropTypes from 'prop-types';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const getMonth = (month) => {
    return months[month]
}

const addZeroBeforValue = (value) => {
    return value < 10 ? `0${value}` : value;
}

function getTargetDate() {
    let targetTime = new Date();
    targetTime = targetTime.setDate(targetTime.getDate() + 47);
    targetTime = new Date(targetTime);

    return `${targetTime.getFullYear()}-${getMonth(targetTime.getMonth())}-${targetTime.getDate()} 00:00`;
}

function calculateTimeRemaining(timeRemaining) {
    return [{
        days: Math.floor(timeRemaining / 1000 / 60 / 60 / 24),
        hours: Math.floor(timeRemaining / 1000 / 60 / 60) % 24,
        minutes: Math.floor(timeRemaining / 1000 / 60) % 60,
        seconds: Math.floor(timeRemaining / 1000) % 60
    }]
}


function Countdown({ theme }) {

    const targetDate = new Date(getTargetDate());
    const [timeRemaining, setTimeRemaining] = useState(
        calculateTimeRemaining(targetDate.getTime() - new Date().getTime())
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(
                calculateTimeRemaining(targetDate.getTime() - new Date().getTime())
            );
        }, 1000)

        return () => clearInterval(interval);
    })


    return <div className={`countdown-component ${theme === 'light' ? 'light' : ''}`}>
        <h2>
            Coming <span>{targetDate.getDay()} {getMonth(targetDate.getMonth())} {targetDate.getFullYear()}</span>
        </h2>
        <div className="tiles-container">
            <div className="tile">
                <h3>{timeRemaining[0].days}</h3>
                <p>days</p>
            </div>
            <div className="tile">
                <h3>{addZeroBeforValue(timeRemaining[0].hours)}</h3>
                <p>hours</p>
            </div>
            <div className="tile">
                <h3>{addZeroBeforValue(timeRemaining[0].minutes)}</h3>
                <p>min</p>
            </div>
            <div className="tile">
                <h3>{addZeroBeforValue(timeRemaining[0].seconds)}</h3>
                <p>sec</p>
            </div>
        </div>
    </div>
}
/*


*/
Countdown.propTypes = {
    theme: PropTypes.string
}


export default Countdown;