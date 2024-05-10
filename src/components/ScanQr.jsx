
// import right from "../assets/right.png"
// import React, { useState, useEffect } from "react";
// import { QrReader } from "react-qr-reader";
// import { Link , useNavigate } from "react-router-dom";
// const ScanQr = () => {
//   const [result, setResult] = useState("No result");
//   const [scanned, setScanned] = useState(false);
//   const [scannerActive, setScannerActive] = useState(true); // Add state to control scanner activation

//   const navigate = useNavigate()
//   useEffect(() => {
//     // Check if user is already logged in
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (isLoggedIn === 'true') {
//       // If user is logged in, navigate to the dashboard
//       navigate('/scan');
//     }
//   }, [navigate]);
//   const handleScan = (data) => {
//     if (data && scannerActive) { // Check if scanner is active
//       setResult(data);
//       setScanned(true);
//       setScannerActive(false); // Deactivate scanner after successful scan
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };



//   return (
//     <div className="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 bg-green-100 overflow-y-scroll bg-cover">
//       <div className="absolute bg-gradient-to-tl from-indigo-600 to-green-600 opacity-80 inset-0"></div>
//       <div className="relative border-8 overflow-hidden border-gray-900 bg-gray-900 h-96 rounded-3xl flex flex-col w-64 justify-center items-center bg-no-repeat bg-cover shadow-2xl">
//         <div className="absolute bg-black opacity-60 inset-0"></div>
//         <div className="flex w-full flex-row justify-between items-center mb-2 px-2 text-gray-50 z-10 absolute top-7">
//           <div className="flex flex-row items-center">
//           <div className="flex flex-row items-center" onClick={()=>navigate('/dashboard')}>
//     <svg 
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-8 w-8 p-2 cursor-pointer hover:bg-gray-500 text-gray-50 rounded-full mr-3"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M10 19l-7-7m0 0l7-7m-7 7h18"
//       ></path>
//     </svg>
//     <span className="text-sm">QR Code</span>
//   </div>


//             <span className="text-sm">QR Code</span>
//           </div>
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 p-2 cursor-pointer hover:bg-gray-500 text-gray-50 rounded-full "
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         <div className="text-center flex items-center justify-center w-64 z-10">
//           {scanned ? (
//             <div className=" w-64 items-center flex flex-col justify-center">
//               <p className="text-gray-300 text-2xl mt-3">You are present for lecture</p>
//               <div className=" ">
//                        <img src={right} alt="" />
//                </div>
//             </div>
//           ) : (
//             <div>
//               <div className=" w-56">
//               <QrReader
//                 onResult={handleScan}
//                 onError={handleError}
//                 style={{ width: "100%" }}
//                 resolution={1000} // Set default parameter
//               />
//               </div>
//               <p className="text-gray-300 text-xs ">Scan a QR Code</p>
//               <p className="text-gray-300 text-xs ">{result}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScanQr;
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import right from "../assets/right.png";

const ScanQr = () => {
  const [result, setResult] = useState("No result");
  const [scanned, setScanned] = useState(false);
  const [scannerActive, setScannerActive] = useState(true); // Add state to control scanner activation
  const [facingMode, setFacingMode] = useState("environment"); // State to control camera facing mode

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // If user is logged in, navigate to the dashboard
      navigate("/scan");
    }
  }, [navigate]);

  const handleScan = (data) => {
    if (data && scannerActive) {
      // Check if scanner is active
      setResult(data);
      setScanned(true);
      setScannerActive(false); // Deactivate scanner after successful scan
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleFacingMode = () => {
    // Function to toggle between front and back camera
    setFacingMode(facingMode === "environment" ? "user" : "environment");
  };

  return (
    <div className="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 bg-green-100 overflow-y-scroll bg-cover">
      <div className="absolute bg-gradient-to-tl from-indigo-600 to-green-600 opacity-80 inset-0"></div>
      <div className="relative border-8 overflow-hidden border-gray-900 bg-gray-900 h-96 rounded-3xl flex flex-col w-64 justify-center items-center bg-no-repeat bg-cover shadow-2xl">
        <div className="absolute bg-black opacity-60 inset-0"></div>
        <div className="flex w-full flex-row justify-between items-center mb-2 px-2 text-gray-50 z-10 absolute top-7">
          <div className="flex flex-row items-center">
            <div
              className="flex flex-row items-center"
              onClick={() => navigate("/dashboard")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 p-2 cursor-pointer hover:bg-gray-500 text-gray-50 rounded-full mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              <span className="text-sm">QR Code</span>
            </div>

            <span className="text-sm">QR Code</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 p-2 cursor-pointer hover:bg-gray-500 text-gray-50 rounded-full "
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={toggleFacingMode} // Call toggleFacingMode when clicked
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="text-center flex items-center justify-center w-64 z-10">
          {scanned ? (
            <div className=" w-64 items-center flex flex-col justify-center">
              <p className="text-gray-300 text-2xl mt-3">
                You are present for lecture
              </p>
              <div className=" ">
                <img src={right} alt="" />
              </div>
            </div>
          ) : (
            <div>
              <div className=" w-56">
                <QrReader
                  onResult={handleScan}
                  onError={handleError}
                  style={{ width: "100%" }}
                  resolution={1000}
                  key="environment"
                  constraints={{
                  audio: false,
                  video: { facingMode: "environment" }} 
                }
                />
              </div>
              <p className="text-gray-300 text-xs ">Scan a QR Code</p>
              <p className="text-gray-300 text-xs ">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanQr;
