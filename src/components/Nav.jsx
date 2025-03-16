import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";

const Nav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: `${e.clientX - rect.left}px`,
            y: `${e.clientY - rect.top}px`
        });
    };



    return (
        <nav className="z-10 w-full flex justify-center py-2 px-4 sm:px-6 md:px-8">
            <div
                className="relative overflow-hidden flex items-center justify-center rounded-2xl px-3 py-2 md:py-3 transition-all duration-300 md:hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
                style={{
                    background: isHovered
                        ? `radial-gradient(100px circle at ${mousePosition.x} ${mousePosition.y}, rgba(0,130,246,0.4), transparent 40%)`
                        : "transparent",
                    transition: "background 0.2s ease-out"
                }}
            >
                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                    <img
                        src={logo}
                        alt="Logo"
                        className="object-contain max-w-[60px] sm:max-w-[80px] md:max-w-[100px] animate-float transition-all"
                    />

                    <h1 className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900/60 to-blue-400 bg-clip-text text-transparent animate-text-shine pt-1">
                        <a
                            href="/"
                            className="hover:[text-shadow:_0_0_40px_rgba(96,165,250,0.5)] transition-all"
                        >
                            Kitaabi Baatein
                        </a>
                    </h1>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
