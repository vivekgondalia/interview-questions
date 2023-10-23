import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  addUser = (user: User) => apiClient.post("/users/", user);

  patchUser = (user: User) => apiClient.patch("/users/" + user.id, user);

  deleteUser = (id: number) => apiClient.delete("/users/" + id);
}

export default new UserService();
