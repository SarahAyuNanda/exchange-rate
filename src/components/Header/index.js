import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Modal } from 'antd';
import { ExclamationCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import PathName from '../../helpers/PathName';

import { White } from '../../assets/color';
import './style.css'

const { Header } = Layout
const { confirm } = Modal

const AppHeader = () => {
    const showConfirmModal = () => {
        confirm({
            title: 'Are you sure want to leave?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                window.location.assign(PathName.ROOT)
            },
            onCancel() {
                
            }
        })
    }

    return (
        <Header>
            <div className='title'>
                <Link to={PathName.HOME.BASEURL} style={{ color: White }}>Exchange Rate</Link>
            </div>

            <Menu theme='dark' mode='horizontal' className='menu'>
                <Menu.Item key='1'>
                    <Link to={PathName.HOME.DATE.BASEURL}>Date</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to={PathName.HOME.LATEST.BASEURL}>Latest</Link>
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link to={PathName.HOME.HISTORY.BASEURL}>History</Link>
                </Menu.Item>
            </Menu>

            <div className='logout'>
                {/* <Link to={PathName.ROOT} style={{ color: White, fontSize: 20 }}> */}
                    <LogoutOutlined onClick={showConfirmModal} style={{ color: White, fontSize: 20 }} />
                {/* </Link> */}
            </div>
        </Header>
    );
};

export default AppHeader;