import React, { useState } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import GuestSelector from './GuestSelector';
import AllergyInput from './AllergyInput';
import { sendConfirmationEmail } from '../utils/sendConfirmationEmail';

const ReservationForm: React.FC = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [allergies, setAllergies] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const reservationDetails = {
            date,
            time,
            guests,
            allergies,
        };
        // Send confirmation email
        sendConfirmationEmail(reservationDetails);
        // Reset form
        setDate('');
        setTime('');
        setGuests(1);
        setAllergies('');
    };

    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <h2>Reservation Form</h2>
            <DatePicker selectedDate={date} setSelectedDate={setDate} />
            <TimePicker selectedTime={time} setSelectedTime={setTime} />
            <GuestSelector numberOfGuests={guests} setNumberOfGuests={setGuests} />
            <AllergyInput allergyInfo={allergies} setAllergyInfo={setAllergies} />
            <button type="submit">Submit Reservation</button>
        </form>
    );
};

export default ReservationForm;