import axios from "axios";

export const Axios = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    if (error.message) {
      if (
        error.code === "ECONNABORTED" ||
        error.code === "ENOTFOUND" ||
        error.code === "ECONNREFUSED" ||
        error.code === "EACCES" ||
        error.code === "ERR_BAD_REQUEST"
      ) {
        console.log({
          message: error.message,
          ErrorIdentifier: error.name,
          ErrorCode: error.code,
        });

      }
    }
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    response = response.data.data;
    return response;
  },
  function (error) {
    if (error.message) {
      if (
        error.code === "ECONNABORTED" ||
        error.code === "ENOTFOUND" ||
        error.code === "ECONNREFUSED" ||
        error.code === "EACCES" ||
        error.code === "ERR_BAD_REQUEST"
      ) {
        console.log({
          message: error.message,
          ErrorIdentifier: error.name,
          ErrorCode: error.code,
        });
      }
    }
    // console.log(error);
    return Promise.reject(error);
  }
);
