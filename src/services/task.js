import { HTTP } from "./http-client";
import { URL } from "../constants/constant";
import { mapQueryString } from "./utils.js";

export function getTasks(filterObj) {
    return HTTP.get(`/tasks${mapQueryString(filterObj)}`).then((response) => {
        if (response.data.data && response.data.data.length !== 0) {
            response.data.data.forEach((task) => {
                task.dueDate = Math.round((new Date(task.dueDate) - new Date()) / (24 * 60 * 60 * 1000));
            });
        }
        return response;
    });
}

export function getTaskDetails(id) {
    return HTTP.get(`${URL.tasks}/${id}`)
}

export function createTask(task) {
    return HTTP.post(`${URL.tasks}`, task)
}

export function updateTask(task) {
    return HTTP.put(`${URL.tasks}/${task.id}`, task)
}

