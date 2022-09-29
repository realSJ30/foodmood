import React, { useEffect, useState } from "react";

function SplashScreen() {
  const [styleProp, setStyleProp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (styleProp) {
        setStyleProp(false);
      } else {
        setStyleProp(true);
      }
    }, 1500);
  });

  return (
    <div className="h-full w-full flex justify-center items-center font-nunito">
      <p
        className={
          styleProp
            ? "font-black text-5xl cursor-pointer text-orange-400 transition-colors ease-in-out duration-300"
            : "font-black text-5xl cursor-pointer text-black transition-colors ease-in-out duration-300"
        }
      >
        Food
        <span
          className={
            styleProp
              ? "text-black transition-colors ease-in-out duration-300"
              : "text-orange-400 transition-colors ease-in-out duration-300"
          }
        >
          mood
        </span>
      </p>
    </div>
  );
}

export default SplashScreen;
