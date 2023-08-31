import React, { useState ,useRef,useEffect} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import assetLogo from '../assets/logo.png';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef(null);


    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDown(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    return (
        <div className='bg-custom-blue text-white font-krona'>
            <div className='flex justify-between pt-6 pb-6  pr-12 md:justify-center'>
                <div className='pr-12'>
                    <Link to="/">
                        <img src={assetLogo} className='h-16' alt="Logo" />
                    </Link>
                </div>
                <div className="relative" ref={dropdownRef}>
                    <button
                        className={`md:hidden p-4 transition-transform duration-300 transform ${
                            dropDown ? 'rotate-180' : 'rotate-0'
                        }`}
                        onClick={toggleDropDown}
                    >
                        {!dropDown ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                    <nav
                        className={`absolute right-0 top-14 mt-2 w-56 bg-custom-blue text-white font-krona border border-gray-300 rounded-lg shadow-lg overflow-hidden ${
                            dropDown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        } transition-all duration-300 transform origin-top md:hidden`}
                    >
                        <Link to="/footer" className='block p-4 transition duration-300 hover:bg-gray-800'>About us</Link>
                        <Link to="/projects" className='block p-4 transition duration-300 hover:bg-gray-800'>Projects</Link>
                        <Link to="/why-us" className='block p-4 transition duration-300 hover:bg-gray-800'>Why Us?</Link>
                        <Link to="/partners" className='block p-4 transition duration-300 hover:bg-gray-800'>Partners</Link>
                        <Link to="/contact" className='block p-4 transition duration-300 hover:bg-gray-800'>Contact</Link>
                        <Link to="/know-more" className='block p-4 transition duration-300 hover:bg-gray-800'>Know More</Link>
                        <Link to="/signup" className='block p-4 transition duration-300 hover:bg-gray-800'>Sign up</Link>
                    </nav>
                    {/** Navigation links for larger displays */}
                    <nav className={`hidden md:flex space-x-4 pt-5 gap-10`}>
                        <Link to="/footer" className='transition duration-300 hover:text-yellow-500'>About us</Link>
                        <Link to="/projects" className='transition duration-300 hover:text-yellow-500'>Projects</Link>
                        <Link to="/why-us" className='transition duration-300 hover:text-yellow-500'>Why Us?</Link>
                        <Link to="/partners" className='transition duration-300 hover:text-yellow-500'>Partners</Link>
                        <Link to="/contact" className='transition duration-300 hover:text-yellow-500'>Contact</Link>
                        <Link to="/know-more" className='transition duration-300 hover:text-yellow-500'>Know More</Link>
                        <Link to="/signup" className='transition duration-300 hover:text-yellow-500'>Sign up</Link>
                    </nav>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<div><ContactUs /><Footer /></div>} />
                <Route path='/footer' element={<div><Footer /><ContactUs /></div>} />
                {/* Add more routes here */}
            </Routes>
        </div>
    );
}

export default Navbar;
