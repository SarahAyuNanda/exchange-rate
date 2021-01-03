import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import '../../../assets/style.css'

const TableRate = props => {
    const { data } = props

    const columnTitle = [
        {
            title: '#',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            sortDirection: ['descend', 'ascend'],
            sorter: (a, b) => a.currency.localeCompare(b.currency)
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate'
        }
    ]

    return (
        <Table
            columns={columnTitle}
            dataSource={data}
            pagination={{ position: ['bottomCenter'], pageSize: 5 }}
            className='table'
            size='medium' />
    );
};

TableRate.propTypes = {
    data: PropTypes.array
}

export default TableRate;