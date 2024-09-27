
import React from "react";

import { FaWhatsapp, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <FaFacebook />
                        </div>
                        <a href="https://wa.me/+254708495293" target="_blank" rel="noopener noreferrer" className="header_top__icon_wrapper">
                            <FaWhatsapp />
                        </a>
                        <a href="https://wa.me/+254723584744" target="_blank" rel="noopener noreferrer" className="header_top__icon_wrapper">
                            <FaWhatsapp />
                        </a>
                        <div className="header_top__icon_wrapper">
                            <FaXTwitter />
                        </div>
                    </div>
                    <div className="text-gray-500 text-[12px]">
                        <strong>10% DISCOUNT </strong>
                        FOR THE FIRST 5 SEATS - 2 SEATS REMAINING
                    </div>
                    <div className="flex gap-4">
                        <select
                            name="language"
                            id="language"
                            className="text-gray-500 text-[12px] w-[80px]"
                        >
                            <option value="English">English</option>
                            <option value="French">Swahili</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
