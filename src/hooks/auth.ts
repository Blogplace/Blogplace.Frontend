"use client";

import useSWR from "swr";
import { axios } from "@/lib/axios";
import { AxiosError } from "axios";
import { GetMeResponse } from "@/types/responses";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAuth({
  middleware,
  redirectIfAuthenticated,
}: {
  middleware?: string;
  redirectIfAuthenticated?: string;
} = {}) {
  const router = useRouter();

  const {
    data: user,
    mutate,
    error,
  } = useSWR("/public/api/v1.0/Users/GetMe", () =>
    axios
      .post<GetMeResponse>("/public/api/v1.0/Users/GetMe")
      .then((res) => res.data)
      .catch((err) => console.log(err)),
  );
  // TODO: Implement csrf validation later.
  // const csrf = () => axios.get("/");

  const login = async (email: string, token: string) => {
    // csrf();

    try {
      const res = await axios.get("/public/api/v1.0/Auth/Signin", {
        params: {
          email,
          token,
        },
      });

      console.log(email, token);
      console.log(res);
    } catch (error) {
      if (!(error instanceof AxiosError)) return;

      return {
        success: false,
        message: error.response?.statusText,
      };
    } finally {
      await mutate();
    }
  };

  const register = async (email: string, password: string) => {
    // csrf();

    try {
      const res = await axios.get("/public/api/v1.0/Auth/Signin", {
        params: {
          email,
          password,
        },
      });

      console.log(res.data);
    } catch (error) {
      if (!(error instanceof AxiosError)) return;

      return {
        success: false,
        message: error.response?.statusText,
      };
    } finally {
      await mutate();
    }
  };

  const logout = () => {
    axios.post("/public/api/v1.0/Auth/SignOut").then(() => mutate());
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (middleware === "auth" && error) logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, error]);

  return {
    user,
    login,
    register,
    logout,
  };
}
