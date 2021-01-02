import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState('')

    const monthName = month => {
        switch (month) {
            case 1: return 'January'
            case 2: return 'February'
            case 3: return 'March'
            case 4: return 'April'
            case 5: return 'May'
            case 6: return 'June'
            case 7: return 'July'
            case 8: return 'August'
            case 9: return 'September'
            case 10: return 'October'
            case 11: return 'November'
            case 12: return 'December'
            default: return month
        }
    }

    useEffect(() => {
        let newDate = new Date()
        let date = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        let nameOfMonth = monthName(month)
        let showDate = `${nameOfMonth} ${date}, ${year}`
        setCurrentDate(showDate)
    }, [currentDate])
    
    return (
        <div>{currentDate}</div>
    );
};

export default CurrentDate;