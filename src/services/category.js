import { HTTP } from "./http-client";

export function getAllCategories() {
  return HTTP.get("/categories");
}

export function saveCategory(category) {
  return HTTP.post("/categories", category);
}
