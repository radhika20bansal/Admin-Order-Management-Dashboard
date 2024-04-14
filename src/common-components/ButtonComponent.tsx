import React from "react";

const ButtonComponent = ({ disabled, children }: any) => {
  return (
    <button
      className={disabled ? "bg-gray-400 text-xs text-white rounded-md p-2 font-semibold pointer-events-none" : "text-xs text-white bg-blue-500 rounded-md p-2 font-semibold"}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
