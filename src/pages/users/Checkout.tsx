import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const initial_states = { name: "", phone: "" };

const Checkout = () => {
  const { cart, increment, decrement, getQuantity, totalPrice, totalQuantity } =
    useCartStore();
  const [params, setParams] = useState(initial_states);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="lg:w-[800px] w-full grid lg:grid-cols-5 grid-cols-2 gap-4">
        <div className="col-span-3 bg-white p-6 border border-black h-[300px] rounded-md">
          <div className="flex gap-6 flex-col">
            <input
              name="name"
              placeholder="Enter your name"
              className="p-2"
              value={params?.name}
            />
            <input
              name="phone"
              placeholder="Enter phone number"
              className="p-2"
              value={params?.phone}
            />
          </div>
        </div>
        <div className="col-span-2 bg-white p-6 border border-black rounded-md">
          <h1>Cart</h1>
          {cart.map((item) => (
            <div>{item.name} </div>
          ))}
          <div>{totalPrice()}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
