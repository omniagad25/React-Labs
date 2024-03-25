import React, { useState } from 'react';
import './Form.css';
import Input from '../../Components/InputField/InputField';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: '',
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        imageError: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.nameError = 'Name is required';
        } else if (/\s/.test(formData.name)) {
            errors.nameError = 'Name should not contain spaces';
        }

        if (!formData.email.trim()) {
            errors.emailError = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.emailError = 'Email should be in valid format';
        }

        if (!formData.password.trim()) {
            errors.passwordError = 'Password is required';
        } else if (formData.password.length < 8 || formData.password.length > 12) {
            errors.passwordError = 'Password should be between 8 and 12 characters';
        }

        if (!formData.confirmPassword.trim()) {
            errors.confirmPasswordError = 'Confirm password is required';
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPasswordError = 'Confirm password should match password';
        }

        if (!formData.image.trim()) {
            errors.imageError = 'Image is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            console.log('Form data:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={formErrors.nameError}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={formErrors.emailError}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={formErrors.passwordError}
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={formErrors.confirmPasswordError}
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Upload Image:</label>
                <Input
                    type="file"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    error={formErrors.imageError}
                />
            </div>
            <button type="submit" className="submit-btn">Register</button>
        </form>
    );
};

export default RegisterForm;
