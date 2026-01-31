import React from 'react'

const RecentPosts:React.FC = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between px-30'>
            <button className='cursor-pointer'>Recent Posts</button>
            <button className='text-blue-400 cursor-pointer'> View all </button>
        </div>
    </div>
  )
}

export default RecentPosts