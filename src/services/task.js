import { HTTP } from "./http-client";
import { mapQueryString } from "./utils.js";

export function getTasks(filterObj){
    return HTTP.get(`/tasks${mapQueryString(filterObj)}`)
}