import request from "../axios";
import { FORGET_PASSWORD_URL, LOGIN_URL, SIGN_UP_URL } from "../url";

export const signUpApi = async (payload) => {
  return request.post(SIGN_UP_URL, { data: { attributes: { ...payload } } });
};

export const loginApi = async (payload) => {
  return request.post(LOGIN_URL, { data: { attributes: { ...payload } } });
};

export const ForgetPaswwordApi = async (email) => {
  console.log("email", email);
  return request.post(FORGET_PASSWORD_URL, {
    data: email,
  });
};
