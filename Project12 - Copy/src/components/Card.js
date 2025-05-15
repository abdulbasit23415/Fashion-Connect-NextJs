import React from 'react'



function Card({Icon}) {
  return (
    <div className='flex flex-col justify-center items-center bg-white text-black px-3 py-3 rounded-md'>
                  <div className='text-4xl'>{Icon}</div>
                  <h6 className='py-2 text-sm'>Dummy Text</h6>
                  <p className='text-justify text-sm pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h6 className='pb-4 text-sm'>Dummy Text</h6>
    </div>
  )
}

export default Card