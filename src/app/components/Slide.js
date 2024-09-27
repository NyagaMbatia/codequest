import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Slide = ({ img, title, mainTitle, price }) => {
    const router = useRouter(); // Adjusted import
    const [isClient, setIsClient] = useState(false);

    // No need to check if client since we're in a client component
    const redirectToForm = () => {
        router.push('/start-quest-form');  // Ensure the correct path to the form
    };

    return (
        <div className='outline-none border-none relative'>
            <div className='absolute left-[30px] top-[50%] -translate-y-[50%] space-y-2 bg-[rgba(0,0,0,0.5)] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
                <h3 className='text-accent text-[24px] lg:text-[28px]'> <strong>{title}</strong></h3>
                <h2 className='text-[yellow] text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>{mainTitle}</h2>

                <h3 className='text-[24px] text-gray-500'>
                    starting at <strong className='text-[20px] text-accent md:text-[24px] lg:text-[30px]'>{price}.00</strong> only!
                </h3>
                <div className='bg-accent text-blackish text-[14px] md:text-[16px]
                 p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish hover:text-white'> <button
                        onClick={redirectToForm}
                        className="bg-accent hover:bg-blackish text-white font-bold py-2 px-4 rounded"
                    >
                        Start Quest
                    </button></div>
            </div>
            <Image className='w-full h-auto max-h-[500px] rounded-xl object-cover object-left'
                src={img} alt='Courses Coming Soon' width={2000} height={2000} />
        </div>
    );
};

export default Slide;
