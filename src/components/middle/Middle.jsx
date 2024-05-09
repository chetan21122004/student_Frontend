import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";

import CircularProgress from '../CircularProgress';
function Middle() {
    const prog=90
  return (
    <div className=' h-auto bg-gray-200 p-3 pt-8 pb-0  rounded-md    '>
        
         <div className="top_middle bg-white rounded-xl  p-2 h-28 flex justify-evenly gap-3 items-center">


        <div className="   w-full   shadow-black     flex flex-col  overflow-hidden  items-center justify-center text-gray-400 ">
        <IoNotifications className=' w-9 h-9 ' />
        <p className=" text-black text-base">Notification</p>
        </div>
        <div className="  border-l-4 border-r-4 border-gray-300     w-full   flex  flex-col overflow-hidden  items-center justify-center text-gray-400 ">
        <TbReportAnalytics className=' w-9 h-9 ' />
        <p className=" text-black text-base text-center">Attendance Analysis</p>
        </div>


        <div className="  w-full flex flex-col     overflow-hidden  items-center justify-center text-gray-400 ">
        <FaRegCalendarAlt className=' w-9 h-9 ' />
        <p className=" text-black text-base text-center">Time Table</p>

        </div>
        </div>
        <div className="bg-gray-200  ">

        <CircularProgress strokeWidth={10} radius={100} progress={prog} />
        </div>

    </div>
  )
}

export default Middle;