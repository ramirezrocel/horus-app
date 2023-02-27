import http from "./http";

export function fetchComments() {
  return http.get("/comment");
}

// export function fetchUser(id) {
//   return http.get(`/user/${id}`);
// }
