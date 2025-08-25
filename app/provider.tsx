"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, ReactNode } from "react";

function Provider({ children }: { children: ReactNode }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      CheckIsNewUser();
    }
  }, [user]);

  const CheckIsNewUser = async () => {
    const resp = await axios.post("/api/create-user", { user });
    console.log(resp.data);
  };

  return <div>{children}</div>;
}

export default Provider;
