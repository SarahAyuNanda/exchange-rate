import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

import '../../../../assets/style.css'

const { RangePicker } = DatePicker

const DateRangeSelection = props => {
    const { selectDate } = props
    return (
        <div className='date-range-picker'>
            <RangePicker onChange={selectDate} />
        </div>
    );
};

DateRangeSelection.propTypes = {
    selectDate: PropTypes.func
}

export default DateRangeSelection;