import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';

test('hello world!', () => {
	render(<ReservationForm />);
	const linkElement = screen.getByText(/予約フォーム/i);
	expect(linkElement).toBeInTheDocument();
});