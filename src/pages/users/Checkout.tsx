import React, { useState } from "react";

const Checkout = () => {
  const [upiState, setUpiState] = useState(false);
  return (
    <div className="p-8 flex flex-col gap-4 md:w-[600px] justify-center w-full">
      <p className="font-semibold">Deliver order to Table 1</p>
      <div className="flex flex-col gap-5 w-full">
        <h1 className="font-medium text-lg">Payment Options</h1>
        <div className="">
          <div className="flex justify-between p-2 border">
            <h1>UPI Payments</h1>
            <button
              className="font-semibold"
              onClick={() => {
                setUpiState(!upiState);
              }}
            >
              {upiState ? "-" : "+"}
            </button>
          </div>
          {upiState && (
            <div className="flex flex-col gap-2">
              <p>Phone Pay</p>
              <p>G Pay</p>
              <p>Paytm</p>
            </div>
          )}
        </div>
        <div className="">
          <div className="flex justify-between p-2 border">
            <h1>Netbanking</h1>
            <button
              className="font-semibold"
              onClick={() => {
                setUpiState(!upiState);
              }}
            >
              {upiState ? "-" : "+"}
            </button>
          </div>
          {upiState && (
            <div className="flex flex-col gap-2">
              <p>HDFC</p>
              <p>ICICI</p>
              <p>SBI</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
