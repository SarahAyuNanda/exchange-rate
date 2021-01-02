import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout

const AppFooter = () => {
    const myName = 'Sarah Ayu Nanda'
    const [currentYear, setCurrentYear] = useState('')

    useEffect(() => {
        let year = new Date().getFullYear()
        setCurrentYear(year)
    }, [currentYear])

    return (
        <Footer style={{ textAlign: 'center', padding: 15 }}>{currentYear} &copy; {myName}</Footer>
    );
};

export default AppFooter;