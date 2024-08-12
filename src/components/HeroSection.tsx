import React from 'react'
const HeroSection: React.FC = () => {
  return (
    <>
      <img src="/Banner.jpg" alt="hero" className='min-w-full h-60 sm:h-96 object-fill' />
      <h1 className='text-2xl sm:text-4xl font-bold text-center mt-6'>Hello
        <span className='text-blue-500 animate-pulse  '> Visitor</span>
      </h1>
    </>
  )
}

export default HeroSection