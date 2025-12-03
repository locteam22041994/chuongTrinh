import { Button } from "antd";
import { useEffect, useState } from "react";

function CopyRight() {
  return (
    <>
      <div className="mt-10 px-40 py-6 border-t">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <h1 className="text-sm font-semibold">
              © 2024 Your Company. All rights reserved.
            </h1>

            <div className="flex gap-6 text-sm text-gray-700">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>FAQ</span>
            </div>

            <p className="text-sm text-gray-500 max-w-md">
              Your shop's description goes here. This is a brief introduction to
              your shop and what you offer.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/images/CopyRight/paypal.svg"
              alt="PayPal"
              className="h-7"
            />
            <img
              src="/images/CopyRight/stripe.svg"
              alt="Stripe"
              className="h-7"
            />
            <img src="/images/CopyRight/visa.svg" alt="Visa" className="h-7" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CopyRight;
