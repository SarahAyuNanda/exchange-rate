import React from 'react';
import PropTypes from 'prop-types';

const DateRate = props => {
    const { date, title } = props
    return (
        <div style={{ margin: '10px auto', width: 800, textAlign: 'left' }}>
            {title} : {date === '' ? '-' : date}
        </div>
    );
};

DateRate.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string
}

export default DateRate;