import React from 'react';

interface GuestSelectorProps {
    numberOfGuests: number;
    setNumberOfGuests: (guests: number) => void;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({ numberOfGuests, setNumberOfGuests }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberOfGuests(Number(event.target.value));
    };

    return (
        <div className="guest-selector">
            <label htmlFor="guest-count">人数を選択:</label>
            <select id="guest-count" value={numberOfGuests} onChange={handleChange}>
                {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                        {num + 1} 人
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GuestSelector;