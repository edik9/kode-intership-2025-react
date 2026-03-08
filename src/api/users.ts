import { apiClient } from "./client";
import type { UsersResponse, Department, User } from "../types/user";

const cache = new Map<string, {data: User[]; timestamp: number}>()

export const getUsers = async (department: Department = "all") => {
  const cacheKey = `users_${department}`
  const now = Date.now()
  const fiveMinutes = 5 * 60 * 1000

  const memoryCache = cache.get(cacheKey)
  if (memoryCache && now - memoryCache.timestamp < fiveMinutes){
    return memoryCache.data
  }

  const stored = localStorage.getItem(cacheKey)
  if (stored) {
    const {data, timestamp} = JSON.parse(stored)
    if (now - timestamp < fiveMinutes) {
      cache.set(cacheKey, { data, timestamp });
      return data;
    }
  }
  const example = department === "all" ? "all" : department

  const response = await apiClient.get<UsersResponse>('/users', {
    params: {
       __example: example,
    }
  })

  const data = response.data.items;
  const timestamp = now;
  
  cache.set(cacheKey, { data, timestamp });
  localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp }));

  return data;
}