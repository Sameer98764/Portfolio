import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='container pt-8'> 
    <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Muhammad Sameer

        </div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menulink'><a href='/home'>Home</a></li>
            <li className='menulink'><a href='/about'>About</a></li>
            <li className='menulink'><a href='/project'>Projects</a></li>
            <li className='menulink'><a href='/skill'>Skills</a></li>
            
        </ul>
        <GiHamburgerMenu  size={30}/>

        </div>
        </div>
  )
}

export default Navbar