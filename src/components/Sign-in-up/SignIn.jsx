import React, { useState } from 'react';
import pic from '../../assets/garcia_img.avif';
import SignUp from './SignUp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const SignIn = ({ setSignedIn }) => {

  const navigate = useNavigate();

  const [signUpState, setSignUpState] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex patterns for email and password validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

    // Check if the email and password match the regex patterns
    if (!emailPattern.test(formData.email)) {
      toast.error('Invalid email format. Please enter a valid email address.');
      return;
    }

    // if (!passwordPattern.test(formData.password)) {
    //   toast.error('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    //   return;
    // }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/authorization/login', {
        email: formData.email,
        password: formData.password,
      });

      console.log('Server Response : ', response.data);
      toast.success('Login Successful!');

      navigate('/');

      setSignedIn(true);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Incorrect Password or Email.');
    }
  }

  const toggleSignUp = () => {
    setSignUpState(true);
  }

  if (signUpState) {
    return <SignUp />
  }

  return (
    <div className="font-jost bg-blue-xlight p-10 pt-22">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <img className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover " src={pic} alt="Garcia" />
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 ">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    User-Email
                  </label>
                  <input
                    className="w-full bg-white px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="xyz@gmail.com"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full bg-white px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    onChange={handleChange}
                  />
                  <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div className="mb-4">
                  <input className="mr-2 bg-white leading-tight" type="checkbox" id="checkbox_id" />
                  <label className="text-sm  text-black" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#" onClick={toggleSignUp}
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
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

export default SignIn;
