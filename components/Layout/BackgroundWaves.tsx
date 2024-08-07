/**
 * This code was generated by Builder.io.
 */
import React, { Fragment } from "react";

const BackgroundWaves: React.FC = () => {
  const waves = [
    { height: "145px", marginTop: "0" },
    { height: "59px", marginTop: "2px" },
    { height: "29px", marginTop: "14px" },
    { height: "15px", marginTop: "28px" },
    { height: "7px", marginTop: "56px" },
  ];

  return (
    <React.Fragment>
      <div className="flex absolute right-0 bottom-[17%] z-0 w-full flex-col h-[364px] max-md:max-w-full">
        {waves.map((wave, index) => (
          <div
            key={index}
            className="flex w-full bg-indigo-500"
            style={{
              minHeight: wave.height,
              marginTop: wave.marginTop,
            }}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default BackgroundWaves;