"use client";

import { useState } from "react";
import { useAuth } from "../_context/AuthContext";
import { useRouter } from "next/navigation";

function AddToCart({ data }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { setCart } = useAuth();
  function handleAddToCart() {
    const newData = { ...data, quantity: quantity };
    setCart((cur) => [...cur, newData]);
    router.push("/cart");
  }
  return (
    <div className="col-span-2">
      <div className="border p-[33px] border-[#E5E7EB] rounded-2xl flex flex-col">
        <span className="font-semibold text-2xl text-center">
          ${Number(data.price) * quantity}
        </span>
        <div className="flex flex-col items-center mt-8 gap-4 justify-between">
          <div className="flex flex-1 items-center justify-between w-full">
            <button
              disabled={quantity === 1}
              onClick={() => setQuantity((cur) => (cur === 1 ? cur : --cur))}
              className="px-8 text-primary border py-1 border-[#E5E7EB] rounded-full"
            >
              -
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((cur) => ++cur)}
              className="px-8 text-primary border py-1 border-[#E5E7EB] rounded-full"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-primary w-full items-center py-[14px] justify-center rounded-full gap-2 text-white flex font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <g fill="#F8FAFC" clipPath="url(#clip0_96_1714)">
                <path d="M5.333 7.333c.368 0 .667.299.667.667a2 2 0 0 0 4 0 .667.667 0 1 1 1.333 0 3.333 3.333 0 0 1-6.666 0c0-.368.298-.667.666-.667"></path>
                <path
                  fillRule="evenodd"
                  d="M11.333 4.667h1.425a2 2 0 0 1 1.995 1.857l.375 5.238a3.333 3.333 0 0 1-3.325 3.571H4.197a3.333 3.333 0 0 1-3.325-3.57l.375-5.239A2 2 0 0 1 3.24 4.667h1.426V4a3.333 3.333 0 0 1 6.666 0zM6 4.667h4V4a2 2 0 1 0-4 0zM3.242 6c-.35 0-.64.27-.665.62l-.375 5.238A2 2 0 0 0 4.197 14h7.606a2 2 0 0 0 1.995-2.142l-.374-5.239A.667.667 0 0 0 12.759 6z"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_96_1714">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
