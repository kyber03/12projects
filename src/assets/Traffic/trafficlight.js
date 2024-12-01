import React, { useEffect, useState } from "react";

const Trafficlight = ({ trafficstate }) => {
  // usestate to change color
  const [currentcolor, setCurrentcolor] = useState("green");

  //to change color based on duration and move to next color. this is the main line for key takeaways please note it down
  useEffect(() => {
    //destructuring duration and next objects for color
    const { duration, next } = trafficstate[currentcolor];

    const timerId = setTimeout(() => {
      setCurrentcolor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentcolor]);

  //   to check destructring patter in useeffect
  //function checkColor(color) {
  //     const { duration, next } = trafficstate[currentcolor];
  //     console.log(duration, next);
  //   }

  return (
    <div className="traffic-light-container">
      {Object.keys(trafficstate).map((color, index) => (
        <div
          className="traffic-light"
          style={{
            backgroundColor:
              color === currentcolor && trafficstate[color].backgroundColor,
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default Trafficlight;
