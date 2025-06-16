import React, { useState } from 'react';
import './luxury-theme.css';

const DatePicker: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="date-picker">
            <label htmlFor="date">予約日を選択:</label>
            <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-input"
            />
        </div>
    );
};

export default DatePicker;