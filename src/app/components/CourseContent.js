"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CourseContent = () => {
    const router = useRouter(); // Adjusted import
    const [isClient, setIsClient] = useState(false);

    // No need to check if client since we're in a client component
    const redirectToForm = () => {
        router.push('/start-quest-form');  // Ensure the correct path to the form
    };
    return (
        <div>
            <main className='container sm:rounded bg:gray-100'>
                <section className="text-center mt-12">
                    <h1 className="text-3xl font-bold text-accent"><strong>Why CodeQuest?</strong></h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
                            <h3 className="text-xl font-bold text-accent">Interactive Lessons</h3>
                            <p className="mt-4 text-gray-600">Learn coding with hands-on, interactive lessons designed for kids.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
                            <h3 className="text-xl font-bold text-accent">Fun Challenges</h3>
                            <p className="mt-4 text-gray-600">Complete exciting coding challenges and earn rewards!</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
                            <h3 className="text-xl font-bold text-accent">Safe Community</h3>
                            <p className="mt-4 text-gray-600">Join a community of like-minded kids, moderated for safety.</p>
                        </div>
                    </div>
                </section>
                <section className="mt-16 mb-12 text-center">
                    <button
                        onClick={redirectToForm}
                        className="text-white bg-accent hover:bg-yellow font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
                        Start Your Quest Today!
                    </button>
                </section>

            </main>

        </div >
    )
}

export default CourseContent