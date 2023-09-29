import React, { useState } from 'react';
import pic from '../../assets/about-us-placeholder.avif';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const SignUp = ({loginWithRedirect}) => {


  const handleAuth0 = () =>{
    loginWithRedirect();
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex patterns for email, mobile number, and password validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobilePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

    // Check if the email, mobile, and password match the regex patterns
    if (!emailPattern.test(formData.email)) {
      toast.error('Invalid email format. Please enter a valid email address.');
      return;
    }

    if (!mobilePattern.test(formData.mobile)) {
      toast.error('Invalid mobile number format. Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!passwordPattern.test(formData.password)) {
      toast.error(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match. Please enter the same password in both fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/authorization/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        mobileNumber: formData.mobile,
      });

      console.log('Server response:', response.data);
      toast.success('Registration Successful');
      toast.info('Please sign in to continue.');
      navigate('/sign-in');

    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="font-jost bg-blue-xlight p-10 pt-22">
      {/* Container */}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <img
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover"
              src={pic}
              alt="About Us"
            />
            {/* Col */}
            <div className="w-full lg:w-7/12 bg-white p-5">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 bg-white py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full bg-white px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 bg-white py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobile">
                    Mobile No.
                  </label>
                  <input
                    className="w-full bg-white px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="mobile"
                    type="text"
                    placeholder="9813913185"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full bg-white px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="w-full bg-white px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      type="password"
                      placeholder="******************"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />

                  {/* google auth signUp */}
                <div className="w-full px-4 md:  px-20  font-bold text-white bg-blue-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    <button onClick={handleAuth0} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                </div>

                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href=""
                  >
                    Already have an account? Login!
                  </a>
                </div>

               


              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
