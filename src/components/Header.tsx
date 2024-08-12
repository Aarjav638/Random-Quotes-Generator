import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(isOpen)
  return (
    <>
      <header className='flex justify-between flex-row bg-teal-500 min-w-full text-white py-4 px-4 md:px-8 items-center'>
        <a href='./App.tsx'> <h1 className='text-xl md:text-2xl font-semibold mr-6 md:ml-6 text-center'>Random Quotes Generator</h1></a>

        <img src="/menu.png" alt="logo" className='flex md:hidden w-6 h-6 md:w-16 md:h-16' onClick={() => { setIsOpen(!isOpen) }} />
        <div className='w-[25%] hidden md:flex'>
          <ul className='flex-row flex gap-x-6 '>
            <li><a href="#" referrerPolicy="no-referrer" >Home</a></li>
            <li><a href="#" referrerPolicy='no-referrer'>About</a></li>
            <li><a href="#" referrerPolicy='no-referrer'>Contact</a></li>
          </ul>
        </div>


      </header>
      {isOpen && <div className="w-full bg-teal-500">
        <ul className='flex flex-col px-4 text-white gap-y-2 items-center '>
          <a href='./App.tsx'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </ul>

      </div>}
    </>
  )
}

export default Header