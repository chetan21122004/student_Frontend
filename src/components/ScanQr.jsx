
import right from "../assets/right.png"
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios';

const ScanQr = () => {
  const [result, setResult] = useState("No result");
  const [scanned, setScanned] = useState(false);
  const [scannerActive, setScannerActive] = useState(true); // Add state to control scanner activation
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const user = JSON.parse(localStorage.getItem('user')); // Set isLoggedIn in local storage
console.log(user);
  

  const handleScan = async (data) => {
    if (data && scannerActive) { // Check if scanner is active
      
    
    console.log(data);
    try {
      // Ensure e is a valid string before parsing
      
      // Convert e to integer
      const tem_lec_id = parseInt(data.text);
      if (isNaN(tem_lec_id)) {
        console.error('Invalid integer value:', data.text);
        return;
      }
      
  
      // Send both student_id and tem_lec_id to the server
      const response = await axios.post("https://stu-backend.vercel.app/scanqr", { user: { ...user, tem_lec_id } });

      // const response = await axios.post('http://localhost:2000/scanqr',user);
  
      // console.log(response.data.message);
      setMessage(response.data.message)
      // console.log(message);
      setScanned(true);
      setScannerActive(false);

      // Update QR value with generated IDs
  
    } catch (error) {
      console.error('Error generating and posting QR:', error);
    }
  }

  };
  
 const handleError=(err)=>{
    console.error(err)
  }


  return (
    <div className="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 bg-green-100 overflow-y-scroll bg-cover">
      <div className="absolute bg-gradient-to-tl from-indigo-600 to-green-600 opacity-80 inset-0"></div>
      <div className="relative border-8 overflow-hidden border-gray-900 bg-gray-900 h-96 rounded-3xl flex flex-col w-64 justify-center items-center bg-no-repeat bg-cover shadow-2xl">
        <div className="absolute bg-black opacity-60 inset-0"></div>
        <div className="flex w-full flex-row justify-between items-center mb-2 px-2 text-gray-50 z-10 absolute top-7">
          <div className="flex flex-row items-center">
          <div className="flex flex-row items-center" onClick={()=>navigate('/dashboard')}>
    <svg  xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 cursor-pointer hover:bg-gray-500 text-gray-50 rounded-full mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
    <span className="text-sm text-center">Scan QR Code</span>
  </div>

            {/* <span className="text-sm">QR Code</span> */}
          </div>
          <div >
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 cursor-pointer hover:bg-gray-500 text-gray-50 rounded-full " viewBox="0 0 20 20" fill="currentColor"
            ><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div className="text-center flex items-center justify-center w-64 z-10">
          {scanned ? (
            <div className=" w-64 items-center flex flex-col justify-center">
              <p className="text-gray-300 text-2xl mt-3">{message}</p>
              <div className=" ">
                       <img src={right} alt="" />
               </div>
               <p>{result}</p>
            </div>
          ) : (
            <div>
              <div className=" w-64">
              <QrReader  key='environment'  onResult={handleScan}  onError ={handleError}  constraints={ {facingMode: "environment"} }  style={{ width: "100%" }}  resolution={2000}   // Set default parameter
              />
              </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanQr;

