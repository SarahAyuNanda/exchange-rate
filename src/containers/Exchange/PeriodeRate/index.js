import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../helpers/PathName';
import HistoryRateAPI from '../../../services/api/HistoryRate';
import DateRangeSelection from '../../../components/Select/Date/DateRangePicker';
import RateInfo from '../../../components/ShowInfo';
import Loading from '../../../components/Loading';
import TableExpandRate from '../../../components/Table/ExpandedTableRate';

import '../../../assets/style.css'

const { Content } = Layout

const ExchangeRateByPeriode = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.HISTORY.BASEURL, name: 'History Exchange Rate' },
        { path: PathName.HOME.HISTORY.HISTORY_PERIODE, name: 'Exchange Rate by Periode' },
    ]

    const [periodeRateData, setPeriodeRateDate] = useState({})
    const [ratesData, setRatesData] = useState([])
    const [baseData, setBaseData] = useState('')
    const [startDateData, setStartDateData] = useState('')
    const [endDateData, setEndDateData] = useState('')
    const [selectedStartDate, setSelectedStartDate] = useState('')
    const [selectedEndDate, setSelectedEndDate] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const rates = periodeRateData.rates
    const base = periodeRateData.base
    const startDate = periodeRateData.start_at
    const endDate = periodeRateData.end_at

    const selectDateRangeHandler = (_, dateString) => {
        setSelectedStartDate(dateString[0])
        setSelectedEndDate(dateString[1])
    }

    const loadData = () => {
        HistoryRateAPI.PeriodeRate(selectedStartDate, selectedEndDate)
            .then(response => {
                setPeriodeRateDate(response)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(true))
    }

    useEffect(() => {
        if (selectedStartDate === '') {
            setPeriodeRateDate({})
            setRatesData([])
            setBaseData('')
            setStartDateData('')
            setEndDateData('')
            setIsLoading(false)
        }
    }, [selectedStartDate])

    useEffect(() => {
        if (rates !== undefined) {
            let store = []
            Object.keys(rates).map((date, index) => {
                let rateStore = []
                Object.keys(rates[date]).map((currency, number) => {
                    return (
                        rateStore.push({
                            key: `${index + 1}${number + 1}`,
                            currency: currency,
                            rate: rates[date][currency]
                        })
                    )
                })
                return (
                    store.push({
                        key: index + 1,
                        date: Moment(date).format('LL'),
                        children: rateStore
                    })
                )
            })
            const newStartDate = Moment(startDate).format('LL')
            const newEndDate = Moment(endDate).format('LL')
            setRatesData(store)
            setBaseData(base)
            setStartDateData(newStartDate)
            setEndDateData(newEndDate)
        }
    }, [rates, startDate, endDate, base])

    return (
        <Layout className='layout'>
            <AppHeader />
            <Content className='content-layout'>
                <PathLocation pathName={pathName} />
                <div className='content'>
                    <Space size='small'>
                        <DateRangeSelection selectDate={selectDateRangeHandler} />
                        <Button
                            type='primary'
                            shape='round'
                            style={{ width: 100 }}
                            onClick={loadData}
                        >
                            Submit
                        </Button>
                    </Space>
                    <RateInfo title='Start Date' value={startDateData} />
                    <RateInfo title='End Date' value={endDateData} />
                    <RateInfo title='Base' value={baseData} />
                    {isLoading ?
                        <Loading />
                        :
                        <TableExpandRate data={ratesData} />
                    }
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default ExchangeRateByPeriode;