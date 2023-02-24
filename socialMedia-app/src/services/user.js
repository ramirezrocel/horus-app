import http from "./http";

export function fetchUsers() {
  return http.get("/user");
}

export function fetchUser(id) {
  return http.get(`/user/${id}`);
}
