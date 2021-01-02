import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../PathName';
import LatestRateAPI from '../../../services/api/LatestRate';
import SelectBase from '../../../components/Select/Dropdown/SingleSelection';
import DateRate from '../../../components/ShowDate';
import BaseRate from '../../../components/ShowBase';
import Loading from '../../../components/Loading';
import TableRate from '../../../components/Table/SimpleTableRate';

const { Content } = Layout

const ExchangeRateByBase = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.LATEST.BASEURL, name: 'Latest Exchange Rate' },
        { path: PathName.HOME.LATEST.LATEST_BASE, name: 'Latest Exchange Rate by Base' }
    ]

    const [baseRateData, setBaseRateData] = useState({})
    const [ratesData, setRatesData] = useState([])
    const [baseData, setBaseData] = useState('')
    const [dateData, setDateData] = useState('')
    const [selectedBase, setSelectedBase] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const rates = baseRateData.rates
    const base = baseRateData.base
    const date = baseRateData.date

    const selectBase = value => setSelectedBase(value)

    const loadData = () => {
        LatestRateAPI.BaseRate(selectedBase)
            .then(response => {
                setBaseRateData(response)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(true)
            })
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
    }, [rates, base, date])

    return (
        <Layout className='layout'>
            <AppHeader />
            <Content className='content-layout'>
                <PathLocation pathName={pathName} />
                <div className='content'>
                    <Space size='small'>
                        <SelectBase selectChange={selectBase} />
                        <Button
                            type='primary'
                            shape='round'
                            style={{ width: 100 }}
                            onClick={loadData}
                        >
                            Submit
                        </Button>
                    </Space>
                    <DateRate date={dateData} title='Date' />
                    <BaseRate base={baseData} />
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

export default ExchangeRateByBase;