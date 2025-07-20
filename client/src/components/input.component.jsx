import { useState } from "react";
import { cn } from "../lib/utils";

const InputBox = ({ name, type, icon, placeholder, id, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <input
        name={name}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        id={id}
        defaultValue={value}
        className={cn("input-box")}
      />
      <i className={`fi ${icon} input-icon`}></i>
      {type === "password" && (
        <i
          className={`fi ${
            showPassword ? "fi-rr-eye" : "fi-rr-eye-crossed"
          } input-icon left-[auto] right-4 cursor-pointer`}
          onClick={() => setShowPassword(!showPassword)}
        ></i>
      )}
    </div>
  );
};

export default InputBox;
