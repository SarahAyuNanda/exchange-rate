import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import CurrentDate from '../CurrentDate';

import './style.css'

const PathLocation = props => {
    const { pathName } = props
    return (
        <div className='path'>
            <Breadcrumb >
                {pathName.map(item => (
                    <Breadcrumb.Item>
                        <Link to={item.path}>{item.name}</Link>
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb >
            <CurrentDate />
        </div>
    );
};

export default PathLocation;