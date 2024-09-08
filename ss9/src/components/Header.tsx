import {useState} from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {

    const[menuOpen,setMenuOpen]=useState(false);

    const toggle=()=>{
        setMenuOpen(!menuOpen);
    }

  return (
    <>
    <nav className='flex justify-between pt-4 w-[92%]  mx-auto' >
      <img src='/src/assets/csed.png' alt='Logo' className='w-[30%] h-auto object-contain'></img>
      <div className='text-white text-[2rem] m-4'>
        {/* <ul className='flex justify-around gap-24 md:flex-row flex-col'> */}

        <div className='md:hidden h-5 w-5' onClick={toggle}>
            <FaBars/>
        </div>

        <ul className='hidden md:flex space-x-24'>
            <li>
                <a href='#' className='hover:text-primary'>HOME</a>
            </li>
            <li>
                <a href='#'  className='hover:text-primary'>ABOUT</a>
            </li>
            <li>
                <a href='#'  className='hover:text-primary'>FAQ</a>
            </li>
        </ul>
      </div>

        {menuOpen?(
            <ul className='flex-col md:hidden'>
            <li>
                <a href='#' className=' text-white'>HOME</a>
            </li>
            <li>
                <a href='#'  className=' text-white'>ABOUT</a>
            </li>
            <li>
                <a href='#'  className=' text-white'>FAQ</a>
            </li>
        </ul>
        ):null
    }

    </nav>
    <img src='/src/assets/LOGO.png' alt='Startup Street 9.0' className='mt-12 px-6 mx-auto w-100% h-auto object-contain'></img>
    </>
  )
}

export default Header