import React from 'react';

const AllergyInput: React.FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
    return (
        <div className="allergy-input">
            <label htmlFor="allergies">アレルギー情報:</label>
            <input
                type="text"
                id="allergies"
                placeholder="アレルギーがある場合はご記入ください"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default AllergyInput;