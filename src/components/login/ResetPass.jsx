import React from 'react'

function ResetPass() {
    const i = 1

  return (
    <div className=' h-screen w-screen flex justify-center bg-gray-300 items-center'>
    <div className=" sm:w-96 w-80   bg-white p-8  rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">Reset password</h1>

        <form action="" className="my-10">
            <div className="flex flex-col space-y-5">
                <label for="Npass">
                    <p className="font-medium text-slate-700 pb-2">New-Password</p>
                    <input id="Npass" name="Npass" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="New-Password"/>
                </label>
                <label for="Cpass">
                    <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
                    <input id="Cpass" name="Cpass" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Confirm Password"/>
                </label>
               
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Reset password</span>
                </button>
            </div>
        </form>
    </div>
    
    </div>
  )
}

export default ResetPass;