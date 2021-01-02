import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';
import PathLocation from '../../../components/PathLocation';
import PathName from '../../../PathName';

import '../../../assets/style.css'

const { Content } = Layout

const ExchangeRateByHistory = () => {
    const pathName = [
        { path: PathName.HOME.BASEURL, name: 'Home' },
        { path: PathName.HOME.HISTORY.BASEURL, name: ' History Exchange Rate' }
    ]
    return (
        <Layout className='layout'>
            <AppHeader />
            <Content className='content-layout'>
                <PathLocation pathName={pathName} />
                <div className='content'>
                    <Space size='small'>
                        <Button type='primary' shape='round' style={{ width: 100 }}>
                            <Link to={PathName.HOME.HISTORY.HISTORY_PERIODE}>Periode</Link>
                        </Button>
                        <Button type='primary' shape='round' style={{ width: 180 }}>
                            <Link to={PathName.HOME.HISTORY.HISTORY_PERIODE_SYMBOL}>Periode and Symbol</Link>
                        </Button>
                    </Space>
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default ExchangeRateByHistory;