import React from "react";

interface Props {
  label?: String;
  onClick?: () => void;
  disabled?: Boolean;
  width?: any;
  height?: any;
  icon?: any;
}

const PrimaryBtn: React.FC<Props> = ({
  label,
  onClick,
  disabled,
  width,
  icon,
  height,
}: any) => {
  return (
    <div className={`${width}`}>
      <button
        onClick={onClick}
        className={`bg-purple-500 text-white cursor-pointer w-full ${
          height || "h-[42px]"
        } lg:px-5 px-4 flex items-center justify-center rounded-lg text-base font-medium`}
      >
        {icon && <img width={20} height={20} src={icon} alt="icon" />}
        {label}
      </button>
    </div>
  );
};

export default PrimaryBtn;
