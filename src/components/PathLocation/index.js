import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import CurrentDateTime from '../CurrentDateTime';

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
            <CurrentDateTime />
        </div>
    );
};

PathLocation.propTypes = {
    pathName: PropTypes.array
}

export default PathLocation;