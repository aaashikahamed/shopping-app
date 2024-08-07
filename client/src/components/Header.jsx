import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown } from "flowbite-react";
import { MdAccountCircle } from "react-icons/md";

function Header(){
    return(
        <Navbar className='border-b-2 shadow-sm bg-[#e8defa]'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-bold '>
            <span className='font-bold text-[#394f9c] text-xl'>A2Z</span>
        </Link>

        <Link to='/cart' className='md:hidden'>
            <button className='flex items-center gap-1'>
            <span className='hover:text-[#3b51a0]'>cartIcon</span> 

            <span className='bg-red-600 rounded-full w-5 h-5 text-center text-white text-sm'>
                cartItems Number
            </span>
            </button>
        </Link>

        <div className="flex gap-2 md:order-2">
            { (
                <Dropdown 
                arrowIcon={true} 
                inline
                label={ <MdAccountCircle className='text-3xl'/> }>
                    <Dropdown.Header>
                        <span className='block text-sm font-medium truncate'>currentEmail</span>
                    </Dropdown.Header>
                    { (
                        <Link to={'/dashboard'}>
                            <Dropdown.Item  className='text-blue-600 font-bold'>
                                Dashboard
                            </Dropdown.Item>
                        </Link>
                    )}
                    { <Dropdown.Divider />}
                    <Dropdown.Item  className='text-red-600 font-bold'>
                        Delete account
                    </Dropdown.Item>
                    <Dropdown.Item  className='text-green-600 font-bold'>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
            ) }
        </div>

    </Navbar>
    )
}

export default Header