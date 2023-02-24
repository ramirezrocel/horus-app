import http from "./http";

export function fetchPosts() {
  return http.get("/posts");
}
