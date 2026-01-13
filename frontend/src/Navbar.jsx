import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUp } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setIsOpen(false);
        }
    };

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <motion.nav
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="fixed top-0 left-0 right-0 z-[60] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center bg-gradient-to-b from-arcade-900/90 to-arcade-900/70 md:bg-gradient-to-b md:from-arcade-900/80 md:to-transparent backdrop-blur-sm md:backdrop-blur-[2px]"
            >
                <div
                    onClick={scrollToTop}
                    className="font-display font-bold text-md md:text-sm lg:text-lg text-white tracking-wider cursor-pointer"
                >
                    <span className='text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-400'>BOEING</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white'> x </span>TRU<span className="text-arcade-neon">HACKS</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-5 lg:gap-12 items-center">
                    <NavLink
                        text="About"
                        onClick={() => scrollToSection('about')}
                    />
                    <NavLink
                        text="Tracks"
                        onClick={() => scrollToSection('coming-soon')}
                    />
                    <NavLink
                        text="Prizes"
                        onClick={() => scrollToSection('coming-soon')}
                    />
                    <NavLink
                        text="Sponsors"
                        onClick={() => scrollToSection('coming-soon')}
                    />
                    <NavLink
                        text="FAQs"
                        onClick={() => scrollToSection('faqs')}
                    />
                    <NavLink
                        text="Team"
                        onClick={() => scrollToSection('coming-soon')}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scrollToSection('sign-up')}
                        className="cursor-pointer hidden sm:block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm transition-all backdrop-blur-md whitespace-nowrap"
                    >
                        REGISTER NOW
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-20 left-0 right-0 z-50 bg-arcade-900/95 backdrop-blur-lg border-b border-arcade-800 shadow-xl md:hidden"
                >
                    <div className="flex flex-col py-4 px-6 space-y-4">
                        <MobileNavLink
                            text="About"
                            onClick={() => scrollToSection('about')}
                        />
                        <MobileNavLink
                            text="Tracks"
                            onClick={() => scrollToSection('coming-soon')}
                        />
                        <MobileNavLink
                            text="Prizes"
                            onClick={() => scrollToSection('coming-soon')}
                        />
                        <MobileNavLink
                            text="Sponsors"
                            onClick={() => scrollToSection('coming-soon')}
                        />
                        <MobileNavLink
                            text="FAQs"
                            onClick={() => scrollToSection('faqs')}
                        />
                        <MobileNavLink
                            text="Team"
                            onClick={() => scrollToSection('coming-soon')}
                        />
                        <button
                            onClick={() => {
                                scrollToSection('sign-up');
                                setIsOpen(false);
                            }}
                            className="w-full mt-4 bg-arcade-neon hover:bg-arcade-cyan text-arcade-900 font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            REGISTER NOW
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 p-3 bg-arcade-neon/90 hover:bg-arcade-cyan rounded-full shadow-lg transition-all"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 text-arcade-900" />
                </motion.button>
            )}
        </>
    );
};

const NavLink = ({ text, onClick }) => (
    <button
        onClick={onClick}
        className="cursor-pointer text-white/70 hover:text-white font-sans text-base lg:text-lg tracking-wide transition-colors relative group"
    >
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-arcade-neon transition-all group-hover:w-full"></span>
    </button>
);

const MobileNavLink = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left py-3 text-white/80 hover:text-white text-lg font-medium border-b border-arcade-800 hover:pl-2 transition-all"
  >
    {text}
  </button>
);