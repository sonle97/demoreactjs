import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.PORT_API,
  timeout: 5000, // default is `0` (no timeout)
  responseType: "json",
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // only get data
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
