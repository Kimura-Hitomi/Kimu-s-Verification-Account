import React from 'react';
import ReservationForm from '../components/ReservationForm';
import './luxury-theme.css';

const ReservationPage: React.FC = () => {
    return (
        <div className="reservation-page">
            <h1 className="reservation-title">レストラン予約</h1>
            <p className="reservation-description">落ち着いた雰囲気の中で、特別なひとときをお過ごしください。</p>
            <ReservationForm />
        </div>
    );
};

export default ReservationPage;