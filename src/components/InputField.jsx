import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const InputField = ({ label, placeholder, type, isPassword, maxWidth }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onShow = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="my-2 w-full" style={{ maxWidth: maxWidth }}>
      <label className="text-tprimary font-medium text-lg">{label}</label>
      <div className="bg-background rounded-md px-3 border border-border flex justify-between mt-2">
        <input
          type={isPassword ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-background py-3 focus:outline-none placeholder:text-tsecondary text-tprimary"
        />
        {isPassword && (
          <button onClick={onShow}>
            {isVisible ? (
              <TbEye className="text-tsecondary text-2xl" />
            ) : (
              <TbEyeClosed className="text-tsecondary text-2xl" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
