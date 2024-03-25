import React from 'react';

const InputField = ({ type, name, value, onChange, error, label }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="input-field"
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default InputField;

