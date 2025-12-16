import React from "react";

const Number = ({ number }) => {
  return (
    <div className="mt-16 flex justify-center items-center relative h-35 gap-6.25">
      <div className="border h-21 w-px "></div>
      <div className="w-14 h-14 border rounded-full flex justify-center text-center items-center text-[16px] font-bold absolute -bottom-[20%] bg-white">
        {number}
      </div>
    </div>
  );
};

export default Number;
