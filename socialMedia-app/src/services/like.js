import http from "./http";

export function fetchLikes(postId) {
  return http.get(`/likes/all/${postId}`);
}
export function isLiked(postId) {
  return http.get(`/likes/liked/${postId}`);
}
export function addLike(postId) {
  return http.post("/likes", { postId });
}

export function removeLiked(id) {
  return http.delete(`/likes/${id}`);
}
