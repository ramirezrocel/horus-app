import http from "./http";

export function fetchComments() {
  return http.get("/comment");
}
