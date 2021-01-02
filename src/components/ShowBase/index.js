import React from 'react';
import PropTypes from 'prop-types';

const BaseRate = props => {
    const { base } = props
    return (
        <div style={{ margin: '10px auto', width: 800, textAlign: 'left' }}>
            Base : {base === '' ? '-' : base}
        </div>
    );
};

BaseRate.propTypes = {
    base: PropTypes.string
}
export default BaseRate;