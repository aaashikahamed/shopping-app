import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import image from '../assets/images/banner.jpg'

function SignIn(){
    

    return(
        <div className='flex justify-center items-center min-h-screen bg-gray-400 p-3'>
        <div className="flex bg-violet-400 p-5 shadow-xl rounded-2xl border">
  
          <div className="w-full hidden md:block">
            <img src={image} alt="background" className='h-32 w-28 rounded-2xl'/>
          </div>
  
          <div className="sm:w-full px-2 md:px-12">
  
            <h3 className='text-[#3b51a1] text-2xl font-bold'>Login</h3>
            <p className='mt-5 '>Dont have an account, <Link to='/sign-up' className='text-blue-800 font-bold hover:underline cursor-pointer whitespace-nowrap'>Register</Link></p>
  
            <form className=" gap-[20px] mt-[20px] flex flex-col "  autoComplete='off'>   
              <input type="email" id='email' className='rounded-xl p-2 border-none shadow-md' placeholder='Enter email' />
  
              <input type="password" id='password' className='p-3 border-none shadow-md rounded-xl ' placeholder='Enter password' />
  
              <button type='submit'  className='rounded-xl py-2 bg-[#3850a7] text-white hover:bg-[#374c97] disabled:bg-[#4f62aa] font-bold'>
                Login
              </button>
            </form>
  
            <div className="grid grid-cols-3 items-center mt-8 text-gray-700">
              <hr className='border-gray-700'/>
              <p className='text-center'>OR</p>
              <hr className='border-gray-700'/>
            </div>
  
           
          </div>
  
        </div>
      </div>
    )


}

export default SignIn
