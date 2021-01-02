import React from 'react';
import PropTypes from 'prop-types';

const RateInfo = props => {
    const { title, value } = props
    return (
        <div style={{ margin: '10px auto', width: 800, textAlign: 'left' }}>
            {title} : {value === '' ? '-' : value}
        </div>
    );
};

RateInfo.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
}

export default RateInfo;