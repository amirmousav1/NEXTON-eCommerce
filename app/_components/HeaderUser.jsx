"use client";

import Link from "next/link";
import { useAuth } from "../_context/AuthContext";
import Spinner from "./Spinner";

function HeaderUser() {
  const { isLoggedIn, user, isLoading, cartItemsNumb } = useAuth();

  if (isLoading) return <span className="text-white">Loading...</span>;
  return (
    <>
      {!isLoggedIn ? (
        <Link href="/login">
          <svg
            className="size-5 sm:size-auto"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="#A8A8A8"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
              stroke="#A8A8A8"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <span className="text-white">Welcome {user?.name}!</span>
      )}
      <Link className="relative" href="/cart">
        {!!cartItemsNumb && (
          <span className="absolute bg-[#0EA5E9] text-white text-xs py-[2px] px-[6.8px] rounded-full -top-2 -right-2">
            {cartItemsNumb}
          </span>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="size-5 sm:size-auto"
        >
          <path
            stroke="#A8A8A8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9 8h12"
          ></path>
        </svg>
      </Link>
    </>
  );
}

export default HeaderUser;
