import { api_Development } from "../Config/ApiConstants";
import crypto from 'crypto-js'

export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const AUTH_USER = "AUTH_USER";
export const ENCRYPTUSERKEY = "RIJO@@@STUDY@@@ENCRYPTION@@@PURPOSE";
export const INITIALIZATIONVECTOR = "SAMPLE12345";

export const getAuthToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
    ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    : "";
};

// EG :---------let options = await getRequestHeaders("POST", { title: "Pencil" });------------
export const getRequestHeaders = async (method, query) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (getAuthToken()) {
    headers["Authorization"] = getAuthToken();
  }
  const requestOptions = {
    headers: headers,
    method: method,
  };
  if (method !== "GET") {
    requestOptions["body"] = JSON.stringify(query);
  }
  return requestOptions;
};

export const getMyAPiUrl = () => {
  return api_Development;
};

export const getAuthUser = () => {
  const selectedUser = localStorage.getItem(AUTH_USER);
  const bytes = crypto.AES.decrypt(selectedUser, ENCRYPTUSERKEY, { INITIALIZATIONVECTOR });
  const returnData = bytes.toString(crypto.enc.Utf8);
  return JSON.parse(returnData);
}
