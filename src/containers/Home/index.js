import React, { useState } from 'react';
import { Button, Layout, Space } from 'antd';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import PathLocation from '../../components/PathLocation';
import PathName from '../../helpers/PathName';
import CurrencyList from '../../components/Home';

import '../../assets/style.css'

const { Content } = Layout

const Home = () => {
    const pathName = [{ path: PathName.HOME.BASEURL, name: 'Home' }]

    const firstTitle = 'Currency List'
    const secondTitle = 'Currency Exchange'

    const [title, setTitle] = useState(firstTitle)
    const [isShowList, setIsShowList] = useState(true)
    const [isListDisabled, setIsListDisable] = useState(true)

    const showListButton = () => {
        setTitle(firstTitle)
        setIsShowList(!isShowList)
        setIsListDisable(!isListDisabled)
    }

    const showExchangeButton = () => {
        setTitle(secondTitle)
        setIsShowList(!isShowList)
        setIsListDisable(!isListDisabled)
    }

    return (
        <Layout className='layout'>
            <AppHeader />
            <Content className='content-layout'>
                <PathLocation pathName={pathName} />
                <div className='content'>
                    <span style={{ marginBottom: 10, fontWeight: 700, fontSize: 24 }}>{title}</span>
                    <Space size='small'>
                        <Button disabled={isListDisabled} onClick={showListButton} type='primary' shape='round' style={{ width: 150 }}>
                            Show List
                        </Button>
                        <Button disabled={!isListDisabled} onClick={showExchangeButton} type='primary' shape='round' style={{ width: 150 }}>
                            Show Exchange
                        </Button>
                    </Space>
                    {isShowList ?
                        <CurrencyList />
                        :
                        "Exchange"
                    }
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default Home;