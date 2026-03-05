import { apiClient } from "./client";
import type { UsersResponse, Department } from "../types/user";

export const getUsers = async (department: Department = "all") => {
  const example = department === "all" ? "all" : department

  const response = await apiClient.get<UsersResponse>('/users', {
    params: {
       __example: example,
    }
  })

  return response.data.items
}