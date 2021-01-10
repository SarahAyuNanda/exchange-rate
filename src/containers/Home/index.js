import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import PathLocation from '../../components/PathLocation';
import PathName from '../../PathName';
import CurrencyList from '../../components/Home';

import '../../assets/style.css'

const { Content } = Layout

const Home = () => {
    const pathName = [{ path: PathName.HOME.BASEURL, name: 'Home' }]
    return (
        <Layout className='layout'>
            <AppHeader />
            <Content className='content-layout'>
                <PathLocation pathName={pathName} />
                <div className='content'>
                    <span style={{ fontWeight: 700, fontSize: 18 }}>Currency List</span>
                    <CurrencyList />
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default Home;