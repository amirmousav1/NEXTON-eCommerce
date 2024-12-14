"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../_context/AuthContext";

export default function page() {
  const [email, setEmail] = useState("john@mail.com");
  const [password, setPassword] = useState("changeme");
  const { setIsLoggedIn, setUser } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      const user = await res.json();
      setUser(user);

      setIsLoggedIn(true);
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mt-10 mx-auto px-4">
      <div>
        <div>
          <Toaster />
        </div>
        <h1 className="text-center font-semibold text-4xl">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mx-auto gap-6 mt-[60px] w-[440px]"
          action=""
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-primary" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="border border-[#E5E7EB] rounded-xl py-3 px-4 text-sm w-full focus:outline-none text-bodyColor"
              id="email"
              placeholder="example@example.com"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-primary" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="border border-[#E5E7EB] rounded-xl py-3 px-4 text-sm w-full focus:outline-none text-bodyColor"
              id="password"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full rounded-full py-4 font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
