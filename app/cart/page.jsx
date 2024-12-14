"use client";

import Link from "next/link";
import { useAuth } from "../_context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { cart, setCart } = useAuth();
  const router = useRouter();
  const totalOrder = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  function handleSubmitOrder() {
    if (!name || !email || !address) {
      toast.error("Please enter your informations.");
      return;
    }
    setCart([]);
    router.push("/thankyou");
  }
  if (!cart.length) {
    return (
      <div className="container mx-auto px-4 mt-10 text-center">
        <h2 className="text-2xl font-semibold text-primary dark:font-medium dark:text-[#e5e7eb]">
          Your cart is empty.
        </h2>
        <Link
          href="/"
          className="text-primary dark:font-medium dark:text-[#e5e7eb] underline mt-4 inline-block"
        >
          Go to Homepage
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 mt-10">
      <Toaster />
      <h1 className="text-primary font-semibold text-4xl dark:font-medium dark:text-[#e5e7eb]">
        Cart
      </h1>
      <div className="font-medium text-[#4B5563] mt-3">
        <Link href="/">Homepage</Link> / <Link href="/cart">Cart</Link>
      </div>
      <div className="md:grid grid-cols-2 gap-10 mt-[52px]">
        <div className="border border-[#E5E7EB] rounded-2xl">
          <div className="flex border-b border-[#E5E7EB] p-6 gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#334155"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.12 12.78a1 1 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55M18.74 19.38A9.93 9.93 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58"
              ></path>
              <path
                stroke="#334155"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
              ></path>
            </svg>
            <span className="font-medium text-bodyColor">CONTACT INFO</span>
          </div>
          <div className="p-6 flex flex-wrap gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-sm text-primary dark:text-bodyColor"
              >
                Your name
              </label>
              <input
                required
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-xl focus:outline-none h-9 border-[#E5E7EB] dark:bg-bodyColor dark:border-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-sm text-primary dark:text-bodyColor"
              >
                Your email
              </label>
              <input
                required
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-xl focus:outline-none h-9 border-[#E5E7EB] dark:bg-bodyColor dark:border-none"
              />
            </div>
          </div>
          <div className="flex p-6 pt-0 pb-8 flex-1 flex-col gap-2">
            <label
              htmlFor="address"
              className="font-semibold text-sm text-primary dark:text-bodyColor"
            >
              Your Address
            </label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              className="border rounded-xl focus:outline-none h-20 p-2 border-[#E5E7EB] dark:bg-bodyColor dark:border-none"
            />
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="font-semibold dark:font-medium dark:text-[#e5e7eb] text-2xl text-primary pb-6 border-b border-[#E5E7EB]">
            Order summary
          </h2>
          {cart.map((item) => (
            <div
              className="flex border-b border-[#E5E7EB] gap-6 py-6"
              key={item.id}
            >
              <img
                className="aspect-[9/10] rounded-xl h-[108px]"
                src={item.images[0]}
                alt={item.title}
              />
              <div className="flex-1 flex flex-col justify-between">
                <span className="font-semibold text-primary dark:text-bodyColor">
                  {item.quantity} * {item.title}
                </span>
                <span className="ml-auto font-semibold text-primary dark:font-medium dark:text-bodyColor">
                  ${item.price * item.quantity}
                </span>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center py-6 dark:text-bodyColor">
            <span>Order total</span>
            <span>${totalOrder}</span>
          </div>
          <button
            onClick={handleSubmitOrder}
            className="bg-primary w-full text-white font-medium py-[14px] rounded-full dark:bg-bodyColor dark:text-primary"
          >
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
}
