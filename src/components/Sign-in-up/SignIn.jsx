import React, { useState } from 'react';
import pic from '../../assets/garcia_img.avif';
import SignUp from './SignUp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



const SignIn = ({setSignedIn,isLoading,isAuthenticated,loginWithRedirect}) => {



    const [signUpState,setSignUpState] = useState(false);


    const handleAuth0Login = () =>{
      loginWithRedirect();
    }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:3000/api/v1/authorization/login',{
        email: formData.email,
        password: formData.password,
      });

      console.log('Server Response : ', response.data);
      toast.success('Login SucessFul');

      setSignedIn(true);
      isAuthenticated(true);

    }catch(error){
      console.error('Error:', error);
      toast.error('InCorrect Password or Email.');
    }
  }

    const toggleSignUp = ()=>{
        setSignUpState(true);
    }

    if(signUpState){
        return <SignUp loginWithRedirect={loginWithRedirect}/>
    }

  return (
    <div className="font-jost bg-blue-xlight p-10 pt-22">

      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <img className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover " src={pic}/>
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 ">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
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

                  {/* google auth signIn */}
                <div className="w-full px-4 md:  px-20  font-bold text-white bg-blue-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    <button onClick={handleAuth0Login} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>SignIn with Google<div></div></button>
                </div>

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
      <ToastContainer/>
    </div>
  );
};

export default SignIn;
