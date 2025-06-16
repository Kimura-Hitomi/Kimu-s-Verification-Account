import React from 'react';

interface TimePickerProps {
    selectedTime: string;
    onTimeChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onTimeChange }) => {
    const times = [
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
    ];

    return (
        <div className="time-picker">
            <label htmlFor="time-select">予約時間を選択:</label>
            <select
                id="time-select"
                value={selectedTime}
                onChange={(e) => onTimeChange(e.target.value)}
            >
                {times.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimePicker;