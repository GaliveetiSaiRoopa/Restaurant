import React from "react";

interface Props {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: any;
  height?: any;
  icon?: any;
  bgColor?: any;
}

const PrimaryBtn: React.FC<Props> = ({
  label,
  onClick,
  disabled,
  width,
  icon,
  height,
  bgColor,
}: Props) => {
  return (
    <div className={`${width}`}>
      <button
        onClick={onClick}
        className={`text-white cursor-pointer w-full ${
          height || "h-[42px]"
        } lg:px-5 px-4 flex items-center justify-center rounded-lg text-base font-medium`}
        style={{
          backgroundColor: bgColor || "#000000",
        }}
      >
        {icon && <img width={20} height={20} src={icon} alt="icon" />}
        {label}
      </button>
    </div>
  );
};

export default PrimaryBtn;
