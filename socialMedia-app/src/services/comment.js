import http from "./http";

export function fetchComments() {
  return http.get("/comment");
}
export function fetchCommentsByPost(id) {
  return http.get(`/comment/${id}`);
}
