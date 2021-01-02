import React from 'react';
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
            {baseList.map(item => {
                return (
                    <Option value={item}>{item}</Option>
                )
            })}
        </Select>
    );
};

export default SelectBase;