import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../helpers/PathName';
import LatestRateAPI from '../../../services/api/LatestRate';
import SelectSymbol from '../../../components/Select/Dropdown/MultiSelection';
import RateInfo from '../../../components/ShowInfo';
import Loading from '../../../components/Loading';
import TableRate from '../../../components/Table/SimpleTableRate';

import '../../../assets/style.css';

const { Content } = Layout

const ExchangeRateBySymbol = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.LATEST.BASEURL, name: 'Latest Exchange Rate' },
        { path: PathName.HOME.LATEST.LATEST_SYMBOL, name: 'Latest Exchange Rate by Symbol' }
    ]

    const [symbolRateData, setSymbolRateData] = useState({})
    const [ratesData, setRatesData] = useState([])
    const [baseData, setBaseData] = useState('')
    const [dateData, setDateData] = useState('')
    const [selectedSymbol, setSelectedSymbol] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const rates = symbolRateData.rates
    const base = symbolRateData.base
    const date = symbolRateData.date

    const selectSymbolHandler = value => setSelectedSymbol(value)

    const loadData = () => {
        let symbolList = selectedSymbol.toString()
        LatestRateAPI.SymbolsRate(symbolList)
            .then(response => {
                setSymbolRateData(response)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(true))
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (rates !== undefined) {
            let rateStore = []
            Object.keys(rates).map((currency, index) => {
                return (
                    rateStore.push({
                        key: index + 1,
                        number: index + 1,
                        currency: currency,
                        rate: rates[currency]
                    })
                )
            })
            const newDate = Moment(date).format('LL')
            setRatesData(rateStore)
            setBaseData(base)
            setDateData(newDate)
        }

        if (selectedSymbol.length === 0) {
            loadData()
        }
        // eslint-disable-next-line
    }, [rates, base, date, selectedSymbol])

    return (
        <Layout className='layout'>
            <AppHeader />
            <Content className='content-layout'>
                <PathLocation pathName={pathName} />
                <div className='content'>
                    <Space size='small'>
                        <SelectSymbol selectChange={selectSymbolHandler} width={400} />
                        <Button
                            type='primary'
                            shape='round'
                            style={{ width: 100 }}
                            onClick={loadData}
                        >
                            Submit
                        </Button>
                    </Space>
                    <RateInfo title='Date' value={dateData} />
                    <RateInfo title='Base' value={baseData} />
                    {isLoading ?
                        <Loading />
                        :
                        <TableRate data={ratesData} />
                    }
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default ExchangeRateBySymbol;