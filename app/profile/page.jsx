"use client";

import { useEffect, useState } from "react";
import Spinner from "../_components/Spinner";

function page() {
  const [user, setUser] = useState(null);
  useEffect(function () {
    async function getUserInformations() {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const data = await response.json();
      setUser(data);
    }
    getUserInformations();
  }, []);

  if (!user) return <Spinner />;

  return <div>Hi, {user.name}</div>;
}

export default page;
