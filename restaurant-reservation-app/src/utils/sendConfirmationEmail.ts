import nodemailer from 'nodemailer';

interface ReservationDetails {
    date: string;
    time: string;
    guests: number;
    allergies: string;
    email: string;
}

export const sendConfirmationEmail = async (reservation: ReservationDetails) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: reservation.email,
        subject: 'Reservation Confirmation',
        text: `Thank you for your reservation!\n\nHere are your reservation details:\nDate: ${reservation.date}\nTime: ${reservation.time}\nNumber of Guests: ${reservation.guests}\nAllergies: ${reservation.allergies}\n\nWe look forward to welcoming you!`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully.');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
    }
};