import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const InputField = ({ label, type, isPassword, maxWidth }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onShow = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="my-5 w-full" style={{ maxWidth: maxWidth }}>
      {/* <label className="text-tprimary font-medium text-lg">{label}</label> */}
      <div className="peer-focus:ring-1 relative bg-background rounded-md px-3 border border-border flex justify-between mt-2 focus:outline-primary peer-focus:border-primary">
        <input
          type={isPassword ? (isVisible ? "text" : "password") : type}
          placeholder=""
          className="z-10 peer w-full bg-background px-1 py-3 focus:outline-none placeholder:text-tsecondary text-tprimary"
        />
        <span className="z-10 absolute -top-3 left-3 text-tprimary bg-background px-1 peer-focus:-top-3 peer-placeholder-shown:text-tprimary peer-placeholder-shown:top-3 peer-focus:text-primary transition-all duration-100">
          {label}
        </span>
        {isPassword && (
          <button onClick={onShow} className="text-tsecondary text-2xl z-10">
            {isVisible ? <TbEye /> : <TbEyeClosed />}
          </button>
        )}
        <div className="peer-focus:ring-1 absolute inset-0 rounded-md"></div>
      </div>
    </div>
  );
};

export default InputField;
