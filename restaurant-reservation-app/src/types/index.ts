export interface Reservation {
    date: string;
    time: string;
    guests: number;
    allergies?: string;
}

export interface Allergy {
    name: string;
    severity: 'mild' | 'moderate' | 'severe';
}