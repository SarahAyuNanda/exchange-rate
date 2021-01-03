import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import '../../../assets/style.css'

const TableExpandRate = props => {
    const { data } = props

    const columnTitle = [
        {
            title: '#',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date)
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
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

TableExpandRate.propTypes = {
    data: PropTypes.array
}

export default TableExpandRate;