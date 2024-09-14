import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <div className='bg-sky-200 flex items-center justify-around'>
            {/* <div className='p-10'>
                <svg className="w-[100px] h-[100px] text-orange-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clip-rule="evenodd" />
                </svg>
            </div> */}
            <div className='p-10 drop-shadow-2xl drop-shadow-xl'>
                <h1 className='text-3xl text-orange-500 font-bold'>Secure Video Hosting and</h1>
                <h1 className='text-3xl mt-1 text-orange-500 font-bold'>Video Streaming and Live Streaming</h1>
                <div className=''>
                    <button type='button' className='mt-10 backdrop-blur-xl touch-pan-x touch-pinch-zoom hover:bg-orange-700 hover:border-orange-700 border-2 p-2 border-orange-400 bg-orange-400 rounded-lg flex items-center font-bold text-2xl'>
                        <svg className="h-5 w-5 mr-4 text-orange-200 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                        </svg>
                        <span className='text-orange-200'>
                            Contact us
                        </span>
                    </button>
                </div>
            </div>
            <div className='drop-shadow-2xl transition ease-in-out hover:scale-110 border-2 p-3 bg-orange-300 rounded-2xl cursor-pointer'>
                <div className='flex items-center'>
                    <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                    </svg>
                    <span className='text-1xl ml-5 font-bold'>Secure Video in Terms of Hosting</span>

                </div>
                <div className='mt-4 flex items-center'>
                    <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                    </svg>

                    <span className='text-1xl ml-5 font-bold'>Integration is very easy for every user</span>
                </div>
                <div className='mt-4 flex items-center'>
                    <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                    </svg>

                    <span className='text-1xl ml-5 font-bold'> Analytics or Dashboard can access by user</span>
                </div>
                <div className='mt-4 flex items-center'>
                    <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                    </svg>

                    <span className='text-1xl ml-5 font-bold'>Secure Video</span>
                </div>
                <div className='mt-4 flex items-center'>
                    <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                    </svg>

                    <span className='text-1xl ml-5 font-bold'>Secure Video</span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection