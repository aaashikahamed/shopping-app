import { Link } from 'react-router-dom'
import {  FaGithubSquare , FaInstagramSquare , FaTwitterSquare  } from 'react-icons/fa'
import { Footer } from 'flowbite-react'


export default function FooterSec() {

  return (
    <Footer container className='border border-[#3b52a5] border-t-8 '>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">

                <div className="mt-5">
                <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold '>
                    <span className='font-bold text-[#3b52a3] text-xl'>A2Z</span>
                </Link>
                    
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='Follow Us'/>
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://www.github.com/aaashikahamed' target='_blank' rel='noopener noreferrer'>
                                    GitHub
                                </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Terms  &amp; Conditions
                                </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="A2Z" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon target='_blank' href='#' icon={FaInstagramSquare }/>
                    <Footer.Icon target='_blank' href='#' icon={FaTwitterSquare}/>
                    <Footer.Icon target='_blank' href='https://www.github.com/aaashikahamed' icon={FaGithubSquare }/>
                </div>
            </div>
        </div>
    </Footer>
  )
}