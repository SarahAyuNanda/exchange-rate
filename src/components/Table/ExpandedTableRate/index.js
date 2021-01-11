import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import '../../../assets/style.css'

const TableExpandRate = props => {
    const { data } = props

    const columnTitle = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            align: 'left'
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            align: 'center'
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            align: 'center'
        }
    ]

    return (
        <Table
            columns={columnTitle}
            dataSource={data}
            pagination={{
                total: data.length,
                showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total}`,
                position: ['bottomCenter'],
                pageSizeOptions: ['5', '10', '20'],
                defaultPageSize: 5,
                showSizeChanger: true
            }}
            className='table' />
    );
};

TableExpandRate.propTypes = {
    data: PropTypes.array
}

export default TableExpandRate;