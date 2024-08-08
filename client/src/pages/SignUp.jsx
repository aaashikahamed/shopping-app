import React from "react";
import { Link,useNavigate } from "react-router-dom";
import image from '../assets/images/banner.jpg'



function SignUp(){

    return(
        <div className='flex justify-center items-center min-h-screen bg-gray-400 p-3'>
            <div className="flex bg-violet-400 p-5 shadow-xl rounded-2xl border">
    
            <div className="sm:w-full px-2 md:px-12">
    
                <h3 className='text-[#3b51a1] text-2xl font-bold'>Register</h3>
                <p className='mt-5 '>if you already have an account, <Link to='/signin' className='text-blue-800 font-bold hover:underline cursor-pointer whitespace-nowrap'>Login</Link></p>


                <form className=" gap-[20px] mt-[20px] flex flex-col "  autoComplete='off'>   
                    <input type="email" id='email' className='rounded-xl p-2 border-none shadow-md' placeholder='Enter email' />
        
                    <input type="password" id='password' className='p-3 border-none shadow-md rounded-xl ' placeholder='Enter password' />
        
                    <button type='submit'  className='rounded-xl py-2 bg-[#3850a7] text-white hover:bg-[#374c97] disabled:bg-[#4f62aa] font-bold'>
                        Register
                    </button>
                 </form>
    
            </div>
    
            <div className="w-full hidden md:block">
                <img src={image} alt="background" className='h-[500px] w-[460px] rounded-2xl'/>
            </div>
    
            </div>
      </div>
    )
}

export default SignUp