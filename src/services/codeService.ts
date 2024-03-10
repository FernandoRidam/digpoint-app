import api from "@/config/api";
import { CodeResponse } from "@/types/answers";
import { AxiosResponse } from "axios";

export const code = async (token: string, id: string, code: string): Promise<AxiosResponse<CodeResponse, any>> => {
  return await api.get<CodeResponse>(`/company/${id}/emplyee/code/${code}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
};
