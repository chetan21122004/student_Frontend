import React, { useState, useEffect } from 'react';

const CircularProgress = ({ radius, strokeWidth, progress }) => {
  const [dashOffset, setDashOffset] = useState();
  const [circumference, setCircumference] = useState();
  const [displayedProgress, setDisplayedProgress] = useState(0); // State variable to control displayed progress

  const prog = progress
  const [progre, setProgre] = useState(0);
  var interval
  useEffect(() => {
      setProgre(0)
    
      setTimeout(() => {
         interval = setInterval(() => {
          setProgre(prevProgress => {
            const newProgress = prevProgress + 1;
            return newProgress >= prog ? prog : newProgress;
           });
            // Reset displayed progress to 0 when progress changes
          }, 75); // Adjust the interval for smoother or faster animation
          
        }, 200);
        
        return () => clearInterval(interval);
      }, [progress]);
      
      useEffect(() => {
    setDisplayedProgress(progre);
    // Calculate circumference once when component mounts
    const circumferenceValue = 2 * Math.PI * radius;
    setCircumference(circumferenceValue);
  
    // Calculate dash offset once when component mounts
    const dashOffsetValue = circumferenceValue - ((progre-4.12) / 100) * circumferenceValue;
    setDashOffset(dashOffsetValue);
  
   
  

  }, [progre, radius,progress]); // Only run this effect when progress or radius changes
  
  return (<>
  <div className=" bg-gray-200 p-4 pb-0 h-auto flex justify-center items-center">
    <svg width={radius * 2} height={radius * 2}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
        stroke="#e6e6e6"
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
        stroke="#007bff"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform={`rotate(-84 ${radius} ${radius})`} // Adjust starting angle for top right corner
        style={{
          transition: 'stroke-dashoffset 0.08s linear  ', // Smooth transition
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="2em"
      >
        {displayedProgress}%
      </text>
    </svg>
    </div>
  </>
  );
};

export default CircularProgress;
