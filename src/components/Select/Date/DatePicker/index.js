import React from 'react';
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

export default DateSelection;