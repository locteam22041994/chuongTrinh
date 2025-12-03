import { Button } from "antd";
import { useEffect, useState } from "react";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-5 mt-4 mx-40">
        <div className="w-full">
          <h1 class="text-sm font-semibold">Shop</h1>
          <div className="flex flex-col gap-2">
            <span>Shop</span>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
          </div>
        </div>
        <div className=" w-full">
          <h1 class="text-sm font-semibold">Pages</h1>
          <div className="flex flex-col gap-2">
            <span>Shop</span>
            <span>Product</span>
            <span>Checkout</span>
            <span>404</span>
          </div>
        </div>
        <div className=" w-full">
          <h1 class="text-sm font-semibold">Account</h1>
          <div className="flex flex-col gap-2">
            <span>Cart</span>
            <span>Registration</span>
            <span>Login</span>
          </div>
        </div>
        <div className=" w-full">
          <h1 class="text-sm font-semibold">Follow Us</h1>
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2">
              <img
                src={`/images/Footer/facebook.svg`}
                alt={`facebook logo`}
                className="w-4 h-4"
              />
              Facebook
            </span>
            <span className="flex flex-row gap-2">
              <img
                src={`/images/Footer/instagram.svg`}
                alt={`instagram logo`}
                className="w-4 h-4"
              />
              Facebook
            </span>
            <span className="flex flex-row gap-2">
              <img
                src={`/images/Footer/pinterest.svg`}
                alt={`pinterest logo`}
                className="w-4 h-4"
              />
              Facebook
            </span>
            <span className="flex flex-row gap-2">
              <img
                src={`/images/Footer/twitter.svg`}
                alt={`twitter logo`}
                className="w-4 h-4"
              />
              Facebook
            </span>
            <span className="flex flex-row gap-2">
              <img
                src={`/images/Footer/youtube.svg`}
                alt={`youtube logo`}
                className="w-4 h-4"
              />
              Facebook
            </span>
          </div>
        </div>
        <div className=" w-full">
          <h1 class="text-sm font-semibold">Contact Us</h1>
          <div className="flex flex-col gap-3">
            <span>
              <img
                src={`/images/Footer/FooterLogo.png`}
                alt={`Footer logo`}
                className="h-[60px] mb-4"
              />
            </span>
            <span>123 Street Name, Paris, France</span>
            <span>Phone: (123) 456-7890</span>
            <span>Email:info@company.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
