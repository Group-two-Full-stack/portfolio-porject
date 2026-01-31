import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className='w-full py-3 flex justify-between'>
        <div className='text-[#FF6464] text-2xl font-semibold'>LOGO</div>
        <div className='flex gap-6'>
            <a href="" className='font-semibold hover:text-[#FF6464]'> Work </a>
            <a href="" className='font-semibold hover:text-[#FF6464]'> Blog </a>
            <a href="" className='font-semibold hover:text-[#FF6464]'> Contact </a>
        </div>
    </div>
  )
}

export default Navbar