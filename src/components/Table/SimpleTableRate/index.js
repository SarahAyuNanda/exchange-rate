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
            sorter: (a, b) => a.currency.localeCompare(b.currency),
            align: 'left'
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            align: 'center'
        }
    ]

    return (
        <div>
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
        </div>
    );
};

TableRate.propTypes = {
    data: PropTypes.array
}

export default TableRate;