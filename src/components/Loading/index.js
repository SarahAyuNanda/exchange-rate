import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
    return (
        <Spin tip='Loading...' size="large"></Spin>
    );
};

export default Loading;