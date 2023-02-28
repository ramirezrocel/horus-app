import http from "./http";

export function fetchComments() {
  return http.get("/comment");
}
export function fetchCommentsByPost(id) {
  return http.get(`/comment/${id}`);
}

export function addComment(postId, value) {
  return http.post(`/posts/${postId}/comments`, { postId, value });
}
