import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const initial_states = { name: "", phone: "" };

const Cart = () => {
  const { cart, increment, decrement, getQuantity, totalPrice, totalQuantity } =
    useCartStore();
  const [params, setParams] = useState(initial_states);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full min-h-screen lg:px-28 py-14">
      {cart.length > 0 ? (
        <div className="lg:flex">
          <div className="flex flex-col md:gap-8 gap-5 lg:w-[60%] lg:border-r border-black px-8">
            <div className="flex justify-between">
              <h1 className="font-bold lg:text-3xl md:text-xl text-lg">
                Cart ({cart.length})
              </h1>
              <button
                className="text-orange-600 underline lg:text-xl text-basefont-medium"
                onClick={() => navigate("/menus")}
              >
                Back to Menu
              </button>
            </div>
            <div className="border p-6 rounded">
              <div className="grid grid-cols-3 gap-6 p-2 bg-slate-300">
                <h1 className="font-semibold">Items</h1>
                <h1 className="font-semibold">Quantity</h1>
                <h1 className="font-semibold">Price</h1>
              </div>
              {cart.map((item) => (
                <div className="grid grid-cols-3 gap-6 items-center p-2">
                  <p>{item.name}</p>
                  <div className="flex rounded-xl py-1 px-3 text-sm w-[95px] font-medium md:gap-4 gap-2">
                    <button onClick={() => increment(item.id)}>
                      <img
                        src="/icons/Add.svg"
                        alt="Minus"
                        className="w-12 h-4"
                      />
                    </button>
                    <p className="font-bold text-black">
                      {getQuantity(item.id)}
                    </p>
                    <button className="" onClick={() => decrement(item.id)}>
                      <img
                        src="/icons/Minus.svg"
                        alt="Minus"
                        className="w-12 h-4"
                      />
                    </button>
                  </div>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:w-[40%] p-8 gap-4">
            <h1 className="font-semibold">Billing Details</h1>
            <div className="flex justify-between">
              <p>Item Total</p>
              <p>₹{totalPrice()}</p>
            </div>
            <div className="flex justify-between border-b border-black">
              <p>GST & Other Charges</p>
              <p>₹{(totalPrice() * 5) / 100}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">To Pay:</p>
              <p>₹{totalPrice() + (totalPrice() * 5) / 100}</p>
            </div>
            <div className="w-full flex justify-center py-4">
              <button
                className="bg-black text-white w-[180px] p-2 rounded"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 p-4">
          <h1 className="font-bold text-3xl">Cart ({cart.length})</h1>
          <div className="flex flex-col gap-4 items-center border p-8 rounded">
            <p className="text-lg font-semibold">Oops! No items added</p>
            <button
              className="border py-1 px-2 rounded bg-slate-800 text-white"
              onClick={() => navigate("/menus")}
            >
              Browse menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
