import { Badge } from "@mui/material";
import React from "react";

const Menu = () => {
  const menuItems = {
    Starters: [
      { name: "Samosa", price: "50" },
      { name: "Baby Corn", price: "100" },
      { name: "Gobi Manchurian", price: "110" },
      { name: "Mushroom Manchurian", price: "120" },
      { name: "Chilli Gobi", price: "150" },
      { name: "Chilli Mushroom", price: "180" },
      { name: "Chilli Panner", price: "200" },
    ],
    "Main Course": [
      { name: "Veg Curry", price: "100" },
      { name: "Matar Panner", price: "120" },
      { name: "kadai Panner", price: "120" },
      { name: "Aloo Mushroom", price: "150" },
      { name: "Dal Tadka", price: "149" },
      { name: "Dal Makhani", price: "169" },
    ],
    Rices: [
      { name: "Plain Rice", price: "70" },
      { name: "Jeera Rice", price: "100" },
      { name: "Pulihora", price: "120" },
      { name: "Mushroom Rice", price: "130" },
      { name: "Veg Fried Rice", price: "130" },
      { name: "Panner Rice", price: "140" },
    ],
    Shakes: [
      { name: "Banana Shake", price: "60" },
      { name: "Apple Shake", price: "70" },
      { name: "Mango Shake", price: "70" },
      { name: "vanilla Shake", price: "80" },
      { name: "Oreo Shake", price: "80" },
      { name: "Butterscotch Shake", price: "90" },
      { name: "Kiwi Shake", price: "100" },
      { name: "Dry Fruits Shake", price: "120" },
    ],
    Juices: [
      { name: "Lemonaid", price: "40" },
      { name: "Butter Milk", price: "40" },
      { name: "Watermelon Juice", price: "50" },
    ],
  };
  return (
    <div className="w-full min-h-screen flex justify-center p-8">
      <div className="flex flex-col items-center p-8 lg:w-[680px] w-full gap-8 bg-black text-white">
        <h1 className="text-3xl font-cursive text-orange-300">Hotal Name</h1>
        <div className="flex justify-between gap-8 w-full">
          <h1 className="text-2xl font-cursive text-orange-300">Menu</h1>
          <Badge
            badgeContent={15}
            sx={{
              "& .MuiBadge-badge": {
                color: "black",
                backgroundColor: "orange",
                fontWeight: "bold",
              },
            }}
          >
            <img src="/icons/Cart.svg" alt="cartIcon" className="w-8 h-8" />
          </Badge>
        </div>
        <div className="flex flex-wrap gap-8 w-full">
          {Object.entries(menuItems).map(([categories, items]) => (
            <div className="flex flex-col gap-2 p-3 border border-dashed border-orange-200">
              <h1 className="text-xl font-cursive text-orange-300">
                {categories}
              </h1>
              {items.map((item) => (
                <div className="grid grid-cols-5 gap-3 items-center">
                  <p className="col-span-3">{item.name}</p>
                  <p className="col-span-1">{item.price}</p>
                  <button className="col-span-1 bg-orange-500 rounded-xl p-1 text-sm w-[35px] font-medium">
                    Add
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-cursive text-orange-300 text-center">
          Timings: 9AM - 11PM
        </h1>
      </div>
    </div>
  );
};

export default Menu;
