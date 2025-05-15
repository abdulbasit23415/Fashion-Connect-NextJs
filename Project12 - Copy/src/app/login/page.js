import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="bg-pink-300 min-h-screen">
        <img src='/images/Ellipse 3.png' className='absolute top-0 right-0 w-[10%]'></img>
        <img src='/images/Ellipse 4.png' className='absolute top-10 right-0 w-[7%]'></img>
        <div className=' flex items-center justify-center'>
            <img className="pl-5 pt-5 w-[25%] h-[25%]" src='/images/All in one.png'></img>
        </div>
        <div className='grid grid-cols-3 gap-4 ml-20'>
            <div>
                <img src='/images/fa6.png' className='w-[45%] h-[70%] ml-20'></img>
            </div>
            <div>
                <Link href={"/sign"}>
                    <button className='font-bold text-2xl mt-8 bg-black text-white w-[80%] h-[10%] rounded-2xl'>
                        As a Customer
                    </button>
                </Link>
                
                <h1 className='text-gray-400 ml-[113px] shadow-green-300 text-2xl p-5 font-bold'>
                    - OR -
                </h1>
                <Link href={"/adminSignUp"}>
                    <button className='font-bold text-2xl bg-black text-white w-[80%] h-[10%] rounded-2xl'>
                        As a Promotor
                    </button>
                </Link>
            </div>
            <div>
                <img src='/images/fa5.png' className='w-[45%] h-[70%]'></img>
            </div>
        </div>
    </div>
  )
}

export default page