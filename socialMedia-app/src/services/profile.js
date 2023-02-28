import http from "./http";

export function fetchUsers() {
  return http.get("/user");
}

export function fetchUser(id) {
  return http.get(`/user/${id}`);
}

export function fetchUserByUsername(username) {
  return http.get(`/profiles/${username}`);
}

export function fetchUserPost(username) {
  return http.get(`profiles/${username}/posts`);
}

export function fetchUserByName(username) {
  return http.get(`profiles/${username}/posts`);
}
