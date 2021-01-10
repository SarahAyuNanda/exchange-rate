import React, { useEffect, useState } from 'react';
import TableList from '../Table/SimpleTableList';

const CurrencyList = () => {
    const [currencyList, setCurrencyList] = useState([])

    const codeList = [
        "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "GBP", "RON", "SEK", "IDR",
        "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "EUR", "MYR", "BGN", "TRY",
        "CNY", "NOK", "NZD", "ZAR", "USD", "MXN", "SGD", "AUD", "ILS", "KRW", "PLN"
    ]

    const currency = [
        { code: "USD", name: "US Dollar" },
        { code: "EUR", name: "Euro" },
        { code: "GBP", name: "British Pound" },
        { code: "INR", name: "Indian Rupee" },
        { code: "AUD", name: "Australian Dollar" },
        { code: "CAD", name: "Canadian Dollar" },
        { code: "SGD", name: "Singapore Dollar" },
        { code: "CHF", name: "Swiss Franc" },
        { code: "MYR", name: "Malaysian Ringgit" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "CNY", name: "Chinese Yuan Renminbi" },
        { code: "NZD", name: "New Zealand Dollar" },
        { code: "THB", name: "Thai Baht" },
        { code: "HUF", name: "Hungarian Forint" },
        { code: "HKD", name: "Hong Kong Dollar" },
        { code: "MXN", name: "Mexican Peso" },
        { code: "ZAR", name: "South African Rand" },
        { code: "PHP", name: "Philippine Peso" },
        { code: "SEK", name: "Swedish Krona" },
        { code: "IDR", name: "Indonesian Rupiah" },
        { code: "BRL", name: "Brazilian Real" },
        { code: "TRY", name: "Turkish Lira" },
        { code: "KRW", name: "South Korean Won" },
        { code: "ISK", name: "Icelandic Krona" },
        { code: "DKK", name: "Danish Krone" },
        { code: "CZK", name: "Czech Koruna" },
        { code: "RON", name: "Romanian Leu" },
        { code: "RUB", name: "Russian Rubie" },
        { code: "HRK", name: "Croatian Kuna" },
        { code: "BGN", name: "Bulgarian Lev" },
        { code: "NOK", name: "Norwegian Krone" },
        { code: "ILS", name: "Israeli Shekel" },
        { code: "PLN", name: "Polish Zloty" }
    ]

    const loadData = () => {
        let store = []
        codeList.sort().map((codeItem, index) => (
            currency.map(item => {
                if (codeItem === item.code) {
                    store.push({
                        key: index + 1,
                        code: item.code,
                        name: item.name
                    })
                }
            })
        ))
        setCurrencyList(store)
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [])

    return (
        <TableList data={currencyList} />
    );
};

export default CurrencyList;