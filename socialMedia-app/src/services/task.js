import http from "./http";

export function fetchTasks() {
  return http.get("/tasks");
}

export function fetchAllTasks() {
  return http.get("/tasks/all");
}

export function fetchTaskById(id) {
  return http.get(`/tasks/${id}`);
}

export function addTask(task) {
  const taskClone = { ...task };
  Object.keys(taskClone).forEach((key) => {
    if (
      taskClone[key] === "" ||
      taskClone[key] === null ||
      taskClone[key] === undefined
    ) {
      delete taskClone[key];
    }
  });

  return http.post("/tasks", taskClone);
}

export function updateTask(id, task) {
  const taskClone = { ...task };
  Object.keys(taskClone).forEach((key) => {
    if (
      taskClone[key] === "" ||
      taskClone[key] === null ||
      taskClone[key] === undefined
    ) {
      delete taskClone[key];
    }
  });
  return http.put(`/tasks/${id}`, taskClone);
}

export function deleteTask(id) {
  return http.delete(`/tasks/${id}`);
}
