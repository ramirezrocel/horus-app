//fetch-user/me.posts

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

// export function addPost(post) {
//   const postClone = { ...post };
//   Object.keys(postClone).forEach((key) => {
//     if (
//       postClone[key] === "" ||
//       postClone[key] === null ||
//       postClone[key] === undefined
//     ) {
//       delete postClone[key];
//     }
//   });

//   return http.post("/posts", postClone);
// }

export function addPost(value, postImageURL) {
  return http.post("/posts", { value, postImageURL });
}

export function updatePost(id, post) {
  const postClone = { ...post };
  Object.keys(postClone).forEach((key) => {
    if (
      postClone[key] === "" ||
      postClone[key] === null ||
      postClone[key] === undefined
    ) {
      delete postClone[key];
    }
  });
  return http.put(`/posts/${id}`, postClone);
}

export function deletePost(id) {
  return http.delete(`/posts/${id}`);
}
