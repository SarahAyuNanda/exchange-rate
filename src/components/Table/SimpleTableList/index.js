import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import '../../../assets/style.css'

const TableList = props => {
    const { data } = props

    const columnTitle = [
        {
            title: 'Currency Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Currency Name',
            dataIndex: 'name',
            key: 'name',
        }
    ]

    return (
        <Table
            columns={columnTitle}
            dataSource={data}
            pagination={{position: ['bottomCenter'], pageSize: 8}}
            className='table'
            size='middle' />
    );
};

TableList.propTypes = {
    data: PropTypes.array
}

export default TableList;