import { api_Development } from "../Config/ApiConstants";
import { getAuthToken } from "../Methods/Authmethods";
import axios from "axios";

// **********************************************************************************
// USE useFetchWithAbort FROM HOOKS IN SERVICE INSTEAD OF THIS
// **********************************************************************************
interface Params {
  headers: any;
  method: string;
}
export const requestMethod = async (
  url: string,
  data: any,
  method: string
): Promise<any> => {
  let baseUrl: string = `${api_Development}/${url}`;
  let headers: any = {
    "Content-Type": "application/json",
  };
  if (getAuthToken()) {
    headers["Authorization"] = getAuthToken();
  }

  const requestOptions: Params = {
    headers: headers,
    method: method,
  };
  return await axios({
    ...requestOptions,
    url: baseUrl,
    data,
  })
    .then((response: any) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error: any) => {
      console.error(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

// **********************************************************************************
// USE useFetchWithAbort FROM HOOKS IN SERVICE INSTEAD OF THIS
// **********************************************************************************

const instance = axios.create({
  baseURL: api_Development,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Accept": "application/json",
    Authorization: getAuthToken()
  }
});

const cancelTokenSource = axios.CancelToken.source();
instance.defaults.cancelToken = cancelTokenSource.token;

export const cancelRequests = (reason: any) => {
  cancelTokenSource.cancel(reason);
};

export const isCancel = (error: any) => {
  return axios.isCancel(error);
};

export default instance;