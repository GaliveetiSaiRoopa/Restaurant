import React from "react";
import PrimaryBtn from "../../components/common/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F3F7] h-screen w-full relative flex items-center justify-center">
      <div className="absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 flex items-center justify-center z-[9]">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-48 h-48 bg-blue-300 blur-3xl rounded-full" />
          <div className="w-48 h-48 bg-orange-300 blur-3xl rounded-full" />
          <div className="w-48 h-48 bg-red-300 blur-3xl rounded-full" />
          <div className="w-48 h-48 bg-purple-300 blur-3xl rounded-full" />
        </div>
      </div>

      <div className="border border-solid border-black px-4 py-10 relative 3xl:w-[36%] lg:w-3/12 w-[300px] z-30 bg-white">
        <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg font-medium">
            YOUR FAVORITES ARE JUST ONE CLICK AWAY...
          </p>

          <PrimaryBtn
            label="Browse Menu"
            onClick={() => {
              navigate("/menus");
            }}
            width={"w-48"}
            bgColor="#9C27B0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
