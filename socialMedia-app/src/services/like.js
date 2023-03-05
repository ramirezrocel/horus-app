import http from "./http";

export function fetchLikes(postId) {
  return http.get(`/likes/all/${postId}`);
}
