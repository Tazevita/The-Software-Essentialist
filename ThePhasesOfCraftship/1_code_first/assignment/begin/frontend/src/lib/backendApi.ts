// lib/api.ts

import type { PostTypeApiRes } from "@/types/postTypes";

const BASE_URL = "http://localhost:3009";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, options);
  return await res.json();
}

function buildQuery(params: Record<string, string | number>): string {
  return "?" + new URLSearchParams(params as Record<string, string>).toString();
}

export const backendApi = {
  users: {
    create: (data: {
      email: string;
      username: string;
      firstName: string;
      lastName: string;
    }) => request(`/users/new${buildQuery(data)}`, { method: "POST" }),

    edit: (
      userId: number,
      data: {
        email: string;
        username: string;
        firstName: string;
        lastName: string;
      },
    ) =>
      request(`/users/edit/${userId}${buildQuery(data)}`, { method: "POST" }),

    getByEmail: (email: string) => request(`/users${buildQuery({ email })}`),
  },

  posts: {
    getPopular: (postsLimit: number) =>
      request<PostTypeApiRes>(`/popular-posts${buildQuery({ postsLimit })}`),

    getNew: (postsLimit: number) =>
      request<PostTypeApiRes>(`/new-posts${buildQuery({ postsLimit })}`),
  },
};
