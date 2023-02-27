//fetch-user/me.posts

import http from "./http";

export function fetchUsers() {
  return http.get("/user");
}

export function fetchUser(id) {
  return http.get(`/user/${id}`);
}

export function fetchUserPost(username) {
  return http.get(`profiles/${username}/posts`);
}
