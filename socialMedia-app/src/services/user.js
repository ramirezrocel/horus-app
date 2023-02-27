//fetch-user/me.posts
import http from "./http";

export function fetchUsers() {
  return http.get("/user");
}

export function fetchUser(id) {
  return http.get(`/user/${id}`);
}

//ok
export function me() {
  return http.get("user/me");
}
