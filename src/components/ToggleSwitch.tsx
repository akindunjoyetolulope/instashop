"use client";

import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative w-[32.5px] h-[20px] flex items-center rounded-full p-1 cursor-pointer
        ${isToggled ? "bg-[#8A226F]" : "bg-gray-300"}
      `}
    >
      <div
        className={`bg-white w-[14px] h-[14px] rounded-full shadow-md transform transition-transform
          ${isToggled ? "translate-x-3" : "translate-x-0"}
        `}
      />
    </div>
  );
};

export default ToggleSwitch;
