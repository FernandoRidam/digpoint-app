import { Company } from "@/models/company";

export interface LoginResponse {
  company: Company;
  token: string;
}

export type LogoutResponse = boolean;

export interface CodeResponse {
  name: string;
}
