import React, { useState, useRef, useEffect } from 'react';
import { Link, Route, Routes  } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './ContactUs';
import assetLogo from '../assets/logo.png';
import Blogs from './Blogs';
import Partners from './Partners';
import ClientFeedback from './ClientFeedback';
import TeamInfo from './TeamInfo';
import ProcessOfInvesting from './ProcessOfInvesting';
import AboutUs from './AboutUs';
import Mission from './Mission';
import InPress from './InPress';
import OurPartners from './Partners/OurPartners';
import WestBurr from './Partners/WestBurr';
import Garcia from './Partners/Garcia';
import Morner from './Partners/Morner';
import Message from './Contact/Message';
import Contact from './Contact/Contact';
import SignIn from './Sign-in-up/SignIn';
import Home from './Home';
import WhyInvest from './WhyInvest';
import ProcessOfBuying from './ProjectsHome/ProcessOfBuying';
import ProjectsHome from './ProjectsHome/ProjectsHome';
import ListedProperties from './ProjectsHome/ListedProperties';
import Property from './ProjectsHome/Property';
import Tenancy from './ProjectsHome/Tenancy';
import Location from './ProjectsHome/Location';
import FloorPlan from './ProjectsHome/FloorPlan';
import Faq from './ProjectsHome/Faq';
import BlogContent from './BlogContent';
import Profile from './ProfilePage/Profile';
import OnSalePropertiesfa from './OnSaleProperties';
import FundedProperties from './FundedProperties';
import ExitedProperties from './ExitedProperties';
import ResaleProperties from './ResaleProperties';
import OnSaleProperties from './OnSaleProperties';


const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef(null);

    const [signedIn,setSignedIn] = useState(false);


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
        <div className='font-krona'>
            <div className='w-full fixed top-0 bg-custom-blue text-white font-krona z-50'>
                <div className='flex  justify-between pt-6 pb-6 pr-12 md:justify-center'>
                    <div className='pr-12'>
                        <Link to="/">
                            <img src={assetLogo} className='h-16 pl-1' alt="Logo" />
                        </Link>
                    </div>
                    <div className="relative right-1 " ref={dropdownRef}>
                        <button
                            className={`md:hidden p-4 transition-transform duration-300 transform ${dropDown ? 'rotate-180' : 'rotate-0'
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
                            className={`absolute right-0 top-14 mt-2 w-56 bg-custom-blue text-white font-krona border border-gray-300 rounded-lg shadow-lg overflow-hidden ${dropDown ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                } transition-all duration-300 transform origin-top md:hidden`}
                        >
                            <Link to="/about-us" className='block p-4 transition duration-300 hover:bg-gray-800'>About us</Link>
                            <Link to="/projects" className='block p-4 transition duration-300 hover:bg-gray-800'>Projects</Link>
                            <Link to="/why-us" className='block p-4 transition duration-300 hover:bg-gray-800'>Why Us?</Link>
                            <Link to="/partners" className='block p-4 transition duration-300 hover:bg-gray-800'>Partners</Link>
                            <Link to="/contact" className='block p-4 transition duration-300 hover:bg-gray-800'>Contact</Link>
                            <Link to="/know-more" className='block p-4 transition duration-300 hover:bg-gray-800'>Know More</Link>
                            {signedIn ? (
                            <Link to="/profile" className='block p-4 transition duration-300 hover:bg-gray-800'>
                                Profile
                            </Link>
                            ) : (
                            <Link to="/signup" className='block p-4 transition duration-300 hover:bg-gray-800'>
                                Sign up
                            </Link>
                            )}     
                           </nav>

                        {/** Navigation links for larger displays */}
                        <nav className={`hidden md:flex space-x-4 pt-5 gap-10`}>
                            <Link to="/about-us" className='transition duration-300 hover:text-yellow-500'>About us</Link>
                            <Link to="/projects" className='transition duration-300 hover:text-yellow-500'>Projects</Link>
                            <Link to="/why-us" className='transition duration-300 hover:text-yellow-500'>Why Us?</Link>
                            <Link to="/partners" className='transition duration-300 hover:text-yellow-500'>Partners</Link>
                            <Link to="/contact" className='transition duration-300 hover:text-yellow-500'>Contact</Link>
                            <Link to="/know-more" className='transition duration-300 hover:text-yellow-500'>Know More</Link>

                            {signedIn ? (
                            <Link to="/profile" className="transition duration-300 hover:text-yellow-500">
                                Profile
                            </Link>
                            ) : (
                            <Link to="/signup" className="transition duration-300 hover:text-yellow-500">
                                Sign up
                            </Link>
                            )}
                        </nav>
                    </div>
                </div>
            </div>


            <Routes>
                <Route path='/' element={<div><Home /><WhyInvest /><ProcessOfInvesting /><ClientFeedback /><TeamInfo /><Partners /><ContactUs /><Footer /></div>} />
                <Route path='/about-us' element={<div><AboutUs /><Mission /><TeamInfo /><ContactUs /><Footer /></div>} />
                <Route path='/projects' element={<div><ProjectsHome /><ProcessOfBuying /><ListedProperties /><ContactUs /><Footer /></div>} />

                <Route path="/property/:id" element={<div><Property /><Tenancy /><Location /><FloorPlan /><Faq /><Footer /></div>} />

                <Route path='/blog' element={<div><BlogContent /><Footer /></div>} />

                <Route path='/why-us' element={<div><InPress /><ContactUs /><Footer /></div>} />
                <Route path='/partners' element={<div><OurPartners /><WestBurr /><Garcia /><Morner /><Footer /></div>} />
                <Route path='/contact' element={<div><Contact /><Message /><Footer /></div>} />
                <Route path='/know-more' element={<div><Blogs /><Footer /></div>} />
                <Route path='/signup' element={<div><SignIn setSignedIn={setSignedIn} /><Footer /></div>} />

                <Route path='/profile' element={<div><Profile /><Footer/></div>} />

                <Route path='/allproperties' element={<div><OnSaleProperties /><FundedProperties/><ExitedProperties/><ResaleProperties/><Footer/></div>}/>

            </Routes>

        </div>
    );
}

export default Navbar;
