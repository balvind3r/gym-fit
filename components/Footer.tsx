import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 mb-0 pb-0 pt-4 gap-6  w-full bottom-0 bg-[#fff3f4] flex flex-col justify-center items-center '>
        <div className='genos flex flex-row items-center justify-center'>
        <img
        src="/Assets/images/Logo.png"
        alt="image"
        className="w-8 h-8  mx-3 md:h-10 md:w-10 lg:h-12 lg:w-12 lg:mx-4 "
      />
      <p className='text-xl md:text-2xl lg:text-3xl'>Gym-ify</p>
        </div>

        <img src="/Assets/images/FooterAuthor.png" alt="asset" className='w-72 mb-4' />
    </div>
  )
}

export default Footer