import axios from "axios";

export const api = axios.create({
  baseURL: "https://pbidentityapi.azurewebsites.net/auth",
});

export const makeRequest = axios.create({
  baseURL: "https://socialmediaapi20230406163142.azurewebsites.net",
  withCredentials: false,
});
