import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  create = <T>(entity: T) => apiClient.post(this.endpoint, entity);

  patch = <T extends Entity>(entity: T) =>
    apiClient.patch(this.endpoint + "/" + entity.id, entity);

  delete = (id: number) => apiClient.delete(this.endpoint + "/" + id);
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
