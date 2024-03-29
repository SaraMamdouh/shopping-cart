import axios from "axios";
import Cookies from "js-cookie";
import { goToLogin } from "../navigation";
import  { IDENTITY as IDENTITY_ROUTES } from "../navigation/constants";

const axiosInstance = axios.create();

const urlExceptions =Object.values(IDENTITY_ROUTES);

const configAccessToken = (config, resolve, accessToken) => {
  config.headers.Authorization = "Bearer " + accessToken;

  return resolve(config);
};

const handleError = (config, resolve) => {
  goToLogin();
  if (resolve && config) {
    return resolve(config);
  }
  return;
};

axiosInstance.interceptors.request.use(function (config) {
  return new Promise((resolve) => {
    // if request doesn't need auth
    if (urlExceptions.some((url) => window?.location?.href?.includes(url))) {
      return resolve(config);
    }
    const accessToken = Cookies.get("at");
    if (!accessToken) {
      return handleError(resolve);
    }
    return configAccessToken(config, resolve, accessToken);
  });
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
