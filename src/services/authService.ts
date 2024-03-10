import api from "@/config/api";
import { LoginResponse, LogoutResponse } from "@/types/answers";
import { AxiosResponse } from "axios";

export const login = async (email: string, password: string): Promise<AxiosResponse<LoginResponse, any>> => {
  return await api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
};

export const logout = async (email: string, password: string): Promise<AxiosResponse<LogoutResponse, any>> => {
  return await api.post<LogoutResponse>("/auth/logout", {
    email,
    password,
  });
};
