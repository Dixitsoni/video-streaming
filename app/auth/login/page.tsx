import React from 'react'

function Login() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-20 lg:px-8">
            <div className="sm:mx-auto sm:w-70 sm:max-w-sm border-2 border-slate-500 rounded-lg p-10">
                <div className="-m-1.5 p-2.5 flex items-center">
                    <span className="sr-only">Your Company</span>
                    {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                         */}
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                    </svg>
                    <span className='text-2xl ml-3 font-bold'>Streaming.video.io</span>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <form className="space-y-3" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                                <div className="flex items-center justify-end mt-3">
                                    <div className="text-sm">
                                        <a href="/auth/forgetpassword/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password ?</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member ?
                        <a href="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register Here !</a>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Login