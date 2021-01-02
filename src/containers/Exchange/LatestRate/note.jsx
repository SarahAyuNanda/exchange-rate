import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import ExchangeRateByBase from '../BaseRate';
import ExchangeRateBySymbol from '../SymbolRate';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../PathName';

import '../../../assets/style.css'

const { Content } = Layout

const tabName = [
    { key: 'latest', tab: 'Latest' },
    { key: 'base', tab: 'Base' },
    { key: 'symbol', tab: 'Symbol' }
]

const tabContent = {
    latest: 'ExchangeRateByLatest',
    base: <ExchangeRateByBase />,
    symbol: <ExchangeRateBySymbol />
}


const ExchangeRateByLatest = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.LATEST.BASEURL, name: 'Latest Exchange Rate' }
    ]

    const pathBase = { path: PathName.HOME.LATEST.LATEST_BASE, name: 'Exchange Rate by Base' }
    const pathSymbol = { path: PathName.HOME.LATEST.LATEST_SYMBOL, name: 'Exchange Rate by Symbol' }

    const [tabSelected, setTabSelected] = useState({ tabKey: 'latest' })
    const [pathSelected, setPathSelected] = useState(pathName)

    const onTabChangeHandler = (key, type) => {
        console.log(key, type);
        setTabSelected({ [type]: key })
        switch (key) {
            case 'base':
                let storeBase = pathName
                storeBase.push(pathBase)
                setPathSelected(storeBase)
                break
            case 'symbol':
                let storeSymbol = pathName
                storeSymbol.push(pathSymbol)
                setPathSelected(storeSymbol)
                break
            default:
                setPathSelected(pathName)
                break
        }
    }

    useEffect(() => {
        console.log({ pathSelected });
    }, [pathSelected])

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
                    <Card tabList={tabName} activeTabKey={tabSelected.tabKey} onTabChange={key => onTabChangeHandler(key, 'tabKey')}>
                        {tabContent[tabSelected.tabKey]}
                    </Card>
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default ExchangeRateByLatest;