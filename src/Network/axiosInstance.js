import axios from "axios";
import myStore from "../Redux/Store";
import { setLoader } from "../Redux/Actions/LoderAction";


export const axiosInstance = axios.create({
    baseURL: "https://retoolapi.dev/s6eFfm/"
})

// implemnt Interceptor 

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent

    myStore.dispatch(setLoader(true))

    config.headers["Authorization"] = "HELLOOPENSOURCE"
    // localStorage.getItem("token")
    // l"HELLOOPENSOURCE"

    config["params"] = {
        "api_key": "test test test"
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    myStore.dispatch(setLoader(false))

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });