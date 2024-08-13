import React, { useState } from 'react'
import SignInModal from './auth/Modal'
import { Link } from 'react-router-dom'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isModalOPen, setIsModalOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsModalOpen(false)
  }




  return (
    <>
      <header className='flex justify-between flex-row bg-teal-500 min-w-full text-white py-4 px-4 md:px-8 items-center'>
        <Link to='/'> <h1 className='text-xl md:text-2xl font-semibold mr-6 md:ml-6 text-center'>Random Quotes Generator</h1></Link>

        <img src="/menu.png" alt="logo" className='flex md:hidden w-6 h-6 md:w-16 md:h-16' onClick={() => { setIsOpen(!isOpen) }} />
        <div className='w-[25%] hidden md:flex'>
          <ul className='flex-row flex gap-x-6 '>
            <li><Link to="/" referrerPolicy="no-referrer" >Home</Link></li>
            <li><Link to="/about" referrerPolicy='no-referrer'>About</Link></li>
            <li><Link to="/contact" referrerPolicy='no-referrer'>Contact</Link></li>
          </ul>
        </div>

        <span className='hidden md:flex'> <button className='bg-white text-teal-500 px-4 py-2 rounded-lg' onClick={() => {
          setIsModalOpen(true)
        }}>Sign in</button></span>


      </header>
      {isOpen && <div className="w-full bg-teal-500">
        <ul className='flex flex-col px-4 text-white gap-y-2 items-center '>
          <li><Link to="/" referrerPolicy="no-referrer" >Home</Link></li>
          <li><Link to="/about" referrerPolicy='no-referrer'>About</Link></li>
          <li><Link to="/contact" referrerPolicy='no-referrer'>Contact</Link></li>
          <button className='bg-white text-teal-500 px-4 py-2 rounded-full mb-2' onClick={() => {
            setIsModalOpen(true)
          }} >Sign in</button>
        </ul>

      </div>}
      {
        isModalOPen &&
        <SignInModal isOpen={isModalOPen} handleClose={handleClose} />

      }
    </>
  )
}

export default Header