import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../helpers/PathName';
import DateRateAPI from '../../../services/api/DateRate';
import DateSelection from '../../../components/Select/Date/DatePicker';
import RateInfo from '../../../components/ShowInfo';
import Loading from '../../../components/Loading';
import TableRate from '../../../components/Table/SimpleTableRate';

import '../../../assets/style.css'

const { Content } = Layout

const ExchangeRateByDate = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.DATE.BASEURL, name: 'Exchange Rate by Date' }
    ]

    const [dateRateData, setDateRateData] = useState({})
    const [ratesData, setRatesData] = useState([])
    const [baseData, setBaseData] = useState('')
    const [dateData, setDateData] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const rates = dateRateData.rates
    const base = dateRateData.base
    const date = dateRateData.date

    const selectDateHandler = (_, dateString) => setSelectedDate(dateString)

    const loadData = () => {
        DateRateAPI.DateRate(selectedDate)
            .then(response => {
                setDateRateData(response)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(true))
    }

    useEffect(() => {
        if (selectedDate === '') {
            setDateRateData({})
            setRatesData([])
            setBaseData('')
            setDateData('')
            setIsLoading(false)
        }
    }, [selectedDate])

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
                        <DateSelection selectDate={selectDateHandler} value={selectedDate} />
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

export default ExchangeRateByDate;