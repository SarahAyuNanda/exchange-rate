import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import '../../../../assets/style.css'

const { Option } = Select

const SelectSymbol = props => {
    const { selectChange, width } = props
    const baseList = [
        "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "GBP", "RON", "SEK", "IDR",
        "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "EUR", "MYR", "BGN", "TRY",
        "CNY", "NOK", "NZD", "ZAR", "USD", "MXN", "SGD", "AUD", "ILS", "KRW", "PLN"
    ]
    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: width, marginRight: 20, textAlign: 'left' }}
            placeholder="Please select the rate symbol"
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

SelectSymbol.propTypes = {
    selectChange: PropTypes.func,
    width: PropTypes.number
}

SelectSymbol.defaultProps = {
    selectChange: () => {console.log('value');}
}

export default SelectSymbol;