import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import PathName from '../../PathName';

import '../../assets/style.css'

const Login = () => {
    return (
        <div className='login-page'>
            <Button type='default' shape='round' size='large'>
                <Link to={PathName.HOME.BASEURL}>Start</Link>
            </Button>
        </div>
    );
};

export default Login;