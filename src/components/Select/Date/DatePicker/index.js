import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

import '../../../../assets/style.css'

const DateSelection = props => {
    const { selectDate, value } = props
    return (
        <div className='date-picker'>
            <DatePicker onChange={selectDate} selected={value} />
        </div>
    );
};

DateSelection.propTypes = {
    selectDate: PropTypes.func,
    value: PropTypes.string
}

export default DateSelection;