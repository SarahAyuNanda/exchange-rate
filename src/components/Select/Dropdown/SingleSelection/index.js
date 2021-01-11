import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import '../../../../assets/style.css'

const { Option } = Select

const SelectBase = props => {
    const { selectChange } = props
    const baseList = [
        "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "GBP", "RON", "SEK", "IDR",
        "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "EUR", "MYR", "BGN", "TRY",
        "CNY", "NOK", "NZD", "ZAR", "USD", "MXN", "SGD", "AUD", "ILS", "KRW", "PLN"
    ]
    return (
        <Select
            showSearch
            placeholder='Select base'
            style={{ width: 200, marginRight: 20, textAlign: 'left' }}
            defaultValue='EUR'
            onChange={selectChange}
        >
            {baseList.sort().map(item => <Option value={item}>{item}</Option>)}
        </Select>
    );
};

SelectBase.propTypes = {
    selectChange: PropTypes.func
}

export default SelectBase;