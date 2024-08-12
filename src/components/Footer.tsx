import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-teal-500 p-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-center text-white font-semibold text-sm">
        © 2024 React Tutorial. All rights reserved.
      </p>
      <div className="w-[25%]">
        <ul className="flex items-center justify-center gap-x-4 text-white">
          <li><a href="#" referrerPolicy="no-referrer" >Home</a></li>
          <li><a href="#" referrerPolicy='no-referrer'>About</a></li>
          <li><a href="#" referrerPolicy='no-referrer'>Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
