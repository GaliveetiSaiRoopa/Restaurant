import { Badge } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const menuItems: any = {
  Starters: [
    { id: 200, name: "Samosa", price: 50, quantity: 0 },
    { id: 201, name: "Baby Corn", price: 100, quantity: 0 },
    { id: 202, name: "Gobi Manchurian", price: 110, quantity: 0 },
    { id: 203, name: "Mushroom Manchurian", price: 120, quantity: 0 },
    { id: 204, name: "Chilli Gobi", price: 150, quantity: 0 },
    { id: 205, name: "Chilli Mushroom", price: 180, quantity: 0 },
    { id: 206, name: "Chilli Panner", price: 200, quantity: 0 },
  ],
  "Main Course": [
    { id: 207, name: "Veg Curry", price: 100, quantity: 0 },
    { id: 208, name: "Matar Panner", price: 120, quantity: 0 },
    { id: 209, name: "kadai Panner", price: 120, quantity: 0 },
    { id: 210, name: "Aloo Mushroom", price: 150, quantity: 0 },
    { id: 211, name: "Dal Tadka", price: 160, quantity: 0 },
    { id: 212, name: "Dal Makhani", price: 169, quantity: 0 },
  ],
  Rices: [
    { id: 213, name: "Plain Rice", price: 70, quantity: 0 },
    { id: 214, name: "Jeera Rice", price: 100, quantity: 0 },
    { id: 215, name: "Pulihora", price: 120, quantity: 0 },
    { id: 216, name: "Mushroom Rice", price: 130, quantity: 0 },
    { id: 217, name: "Veg Fried Rice", price: 130, quantity: 0 },
    { id: 218, name: "Panner Rice", price: 140, quantity: 0 },
  ],
  Shakes: [
    { id: 219, name: "Banana Shake", price: 60, quantity: 0 },
    { id: 220, name: "Apple Shake", price: 70, quantity: 0 },
    { id: 221, name: "Mango Shake", price: 70, quantity: 0 },
    { id: 222, name: "vanilla Shake", price: 80, quantity: 0 },
    { id: 223, name: "Oreo Shake", price: 80, quantity: 0 },
    { id: 224, name: "Butterscotch Shake", price: 90, quantity: 0 },
    { id: 225, name: "Kiwi Shake", price: 100, quantity: 0 },
    { id: 226, name: "Dry Fruits Shake", price: 120, quantity: 0 },
  ],
  Juices: [
    { id: 227, name: "Lemonaid", price: 40, quantity: 0 },
    { id: 228, name: "Butter Milk", price: 40, quantity: 0 },
    { id: 229, name: "Watermelon Juice", price: 50, quantity: 0 },
  ],
};

const Menu = () => {
  const { cart, addToCart, increment, decrement, getQuantity } = useCartStore();
  const [orderDetails, setOrderDetails] = useState<any>([]);
  const navigate = useNavigate();
  console.log(cart, "Cart");
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-8 lg:w-[680px] w-full gap-8 bg-black text-white">
          <h1 className="text-3xl font-cursive text-orange-300">Hotal Name</h1>
          <div className="flex justify-between gap-8 w-full">
            <h1 className="text-2xl font-cursive text-orange-300">Menu</h1>
            <Badge
              badgeContent={cart.length > 0 ? cart.length : 0}
              sx={{
                "& .MuiBadge-badge": {
                  color: "black",
                  backgroundColor: "orange",
                  fontWeight: "bold",
                },
              }}
            >
              <img
                src="/icons/Cart.svg"
                alt="cartIcon"
                className="w-8 h-8 cursor-pointer"
                onClick={() => navigate("/checkout")}
              />
            </Badge>
          </div>
          <div className="flex flex-wrap gap-8 w-full justify-center">
            {Object.entries(menuItems).map(([categories, items]: any) => (
              <div className="flex flex-col gap-2 p-3 border border-dashed border-orange-200">
                <h1 className="text-xl font-cursive text-orange-300">
                  {categories}
                </h1>
                {items.map((item: any) => (
                  <div
                    className="grid grid-cols-5 gap-3 items-center"
                    key={item.id}
                  >
                    <p className="col-span-3">{item.name}</p>
                    <p className="col-span-1">{item.price}</p>
                    {getQuantity(item.id) === 0 ? (
                      <button
                        className="col-span-1 bg-orange-500 rounded-xl py-1 px-8 text-sm w-[45px] font-medium flex justify-center"
                        onClick={() => addToCart(item)}
                      >
                        Add
                      </button>
                    ) : (
                      <div className="flex col-span-1 bg-orange-500 rounded-xl py-1 px-3 text-sm w-[95px] font-medium justify-between gap-4">
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
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-cursive text-orange-300 text-center h-16">
            Timings: 9AM - 11PM
          </h1>
        </div>
      </div>
      {cart.length > 0 && (
        <div
          className={`fixed bottom-0 left-1/2  h-12 transform transition-all lg:w-[680px] w-full bg-orange-500 text-black -translate-x-1/2 ${
            cart.length > 0
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          } duration-300 font-bold`}
        >
          <div className="flex justify-between px-4 py-3 items-center font-semibold">
            <p className="">{cart.length} items added </p>
            <button
              className=""
              onClick={() => {
                navigate("/checkout");
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
