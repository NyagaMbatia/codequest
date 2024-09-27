'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const StartQuestForm = () => {
    const [formData, setFormData] = useState({
        kidName: '',
        phoneNumber: '',
        kidAge: '',
        parentEmail: '',
        inquiries: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // Check if all fields are filled
        const allFieldsFilled = Object.values({ ...formData, [name]: value }).every(field => field.trim() !== '');
        setIsFormValid(allFieldsFilled);
    };

    const triggerConfetti = () => {
        const totalBursts = 1;
        const duration = 200;
        const particleCount = 150;

        for (let i = 0; i < totalBursts; i++) {
            setTimeout(() => {
                confetti({
                    particleCount,
                    spread: 100,
                    origin: { y: 0.6 },
                });
            }, i * duration);
        }
    };

    const handleButtonClick = () => {
        triggerConfetti();
        window.open('/start-quest-form', '_blank', 'noopener,noreferrer');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('Email sent successfully!');
        } else {
            alert(`Error sending email: ${data.message || 'Unknown error'}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#f9f9f9] p-6">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-accent text-center">Start Quest Today</h2>

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Kid's Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="kidName"
                    placeholder="Jane Doe jr"
                    value={formData.kidName}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                    Parent/Guardian Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="parentEmail"
                    placeholder="Jane Doe"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                    Parent/Guardian Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="+254 047 047 047"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                    Kid's Age <span className="text-red-500">*</span>
                </label>
                <input
                    type="number"
                    name="kidAge"
                    value={formData.kidAge}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
                    Inquiries <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="inquiries"
                    value={formData.inquiries}
                    placeholder="How do I make the payment?"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                />

                <button
                    type="button"
                    onClick={handleButtonClick}
                    disabled={!isFormValid} // Disable button if form is not valid
                    className={`bg-accent hover:bg-blackish text-white font-bold py-2 px-4 rounded mt-6 text-center ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Start Quest
                </button>
            </form>
        </div>
    );
};

export default StartQuestForm;
