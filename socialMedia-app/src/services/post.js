import http from "./http";

export function fetchPosts() {
  return http.get("/posts");
}

export function fetchAllPosts() {
  return http.get("/posts/all");
}

export function fetchPostById(id) {
  return http.get(`/posts/${id}`);
}

export function fetchUserPost(userId) {
  return http.get(`/posts/${userId}`);
}

export function addPost(post) {
  const postClone = { ...post };
  return http.post("/posts", postClone);
}

export function updatePost(value, postImageURL, id) {
  return http.put(`/posts/${id}`, { value, postImageURL, id });
}
export function deletePost(id) {
  return http.delete(`/posts/${id}`);
}

export function fetchCommentsByPost(id) {
  return http.get(`/comment/${id}`);
}

export function addComment(postId, value) {
  return http.post(`/posts/${postId}/comments`, { postId, value });
}
export function deleteComment(id, commentId) {
  return http.delete(`/posts/${id}/comments/${commentId}`, { commentId });
}

export function updateComment(postId, id, value) {
  return http.put(`/posts/${postId}/comments/${id}/update`, {
    postId,
    id,
    value,
  });
  // return commentId;
}
