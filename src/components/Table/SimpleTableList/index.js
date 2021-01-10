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
            sortDirection: ['descend', 'ascend'],
            sorter: (a, b) => a.code.localeCompare(b.code),
            align: 'center'
        },
        {
            title: 'Currency Name',
            dataIndex: 'name',
            key: 'name',
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

TableList.propTypes = {
    data: PropTypes.array
}

export default TableList;