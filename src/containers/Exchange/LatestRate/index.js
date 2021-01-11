import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../helpers/PathName';
import LatestRateAPI from '../../../services/api/LatestRate';
import RateInfo from '../../../components/ShowInfo';
import Loading from '../../../components/Loading';
import TableRate from '../../../components/Table/SimpleTableRate';

import '../../../assets/style.css'

const { Content } = Layout

const ExchangeRateByLatest = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.LATEST.BASEURL, name: 'Latest Exchange Rate' }
    ]

    const [latestRateData, setLatestRateData] = useState({})
    const [ratesData, setRatesData] = useState([])
    const [baseData, setBaseData] = useState('')
    const [dateData, setDateData] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const rates = latestRateData.rates
    const base = latestRateData.base
    const date = latestRateData.date

    const loadData = () => {
        LatestRateAPI.LatestRate()
            .then(response => {
                setLatestRateData(response)
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
                        <Button type='primary' shape='round' style={{ width: 100 }}>
                            <Link to={PathName.HOME.LATEST.LATEST_BASE}>Base</Link>
                        </Button>
                        <Button type='primary' shape='round' style={{ width: 100 }}>
                            <Link to={PathName.HOME.LATEST.LATEST_SYMBOL}>Symbol</Link>
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

export default ExchangeRateByLatest;