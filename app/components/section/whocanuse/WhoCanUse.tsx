import Image from 'next/image'
import React from 'react'

function WhoCanUse() {
    return (
        <div className='relative'>
            <div className='w-full'>
                <h1 className='text-center text-5xl mt-10 font-light text-slate-700 text-[#c174b4]'>Who can use this Services</h1>
            </div>
            <div className='flex items-center justify-center'>

                {/* <div className=''>
                    <ol className="mt-10 rtl:space-x-reverse">
                        <li className="flex items-center text-gray-500 dark:text-gray-400 ">
                            <span className="flex items-center mt-5 mb-5 justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                                1
                            </span>
                        </li>
                        <li className="flex items-center text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mt-5 mb-5 justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                2
                            </span>
                        </li>
                        <li className="flex items-center text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mt-5 mb-5 justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                3
                            </span>
                        </li>
                    </ol>
                </div> */}

                <div className='grid grid-cols-3 gap-4 p-20 w-full'>
                    {/* <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div> */}
                    {/* <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div> */}
                    {/* <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div> */}
                    {/* <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-5'>
                    <div>
                        <div>
                            <Image className='' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                        </div>
                        <div>
                            <h3>E-Learning PlateForm</h3>
                        </div>
                        <div>
                            <p>Category: Smart Classes</p>
                        </div>
                    </div>
                </div> */}
                    <div className='border-2 p-5'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div className='pt-3'>
                                <h3 className='text-2xl text-[#335c85] font-light'>E-Learning PlateForm</h3>
                            </div>
                            <div className='pt-3'>
                                <p className='text-1xl'>Category : Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5'>
                        <div>
                            <div>
                                <Image className='w-full h-[11.3rem]' width={100} height={100} src='/assets/images/Webinar-live-streaming-event.jpg' alt='' />
                            </div>
                            <div className='pt-3'>
                                <h3 className='text-2xl text-[#d03633] font-light'>Live Conference</h3>
                            </div>
                            <div className='pt-3'>
                                <p className='text-1xl'>Category : Conference Host</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 '>
                        <div>
                            <div>
                                <Image className='w-full h-[11.3rem]' width={100} height={100} src='/assets/images/csm_Slider_Webinar_Radiation_Protection_VM_84cc6fee9a.jpg' alt='' />
                            </div>
                            <div className='pt-3'>
                                <h3 className='text-2xl text-[#494347] font-light'>Media Streaming</h3>
                            </div>
                            <div className='pt-3'>
                                <p className='text-1xl'>Category : Theatre, News Streaming etc..</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-5 lg:hidden'>
                        <div>
                            <div>
                                <Image className='w-full' width={100} height={100} src='/assets/images/elearning.avif' alt='' />
                            </div>
                            <div>
                                <h3>E-Learning PlateForm</h3>
                            </div>
                            <div>
                                <p>Category: Smart Classes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-0 bottom-0 -z-10 transform-gpu overflow-hidden sm:top-0" aria-hidden="true">
                <div className="relative left-[calc(20%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
            <div className="absolute inset-x-0 top-0 bottom-0 -z-10 transform-gpu overflow-hidden sm:top-0" aria-hidden="true">
                <div className="relative left-[calc(100%-0rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
        </div>
    )
}

export default WhoCanUse