import axios from "axios";

import httpStatus from "../data/httpStatus";
import {ClientPath} from "../data/path";
import {deleteAll} from "../data/sessionStorage";
import {warningMessage} from "../data/message";

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.response.use((response) => response, (error) => {
  const {status, data: {message}} = error.response;
  handleErrorResponse(status, message);
});

export const authenticatedRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
  }
});

authenticatedRequest.interceptors.response.use((response) => response, (error) => {
  const {status, data: {message}} = error.response;
  console.log(status, message);
  handleErrorResponse(status, message);
  return error;
});

const handleErrorResponse = (status, errorMessage) => {
  console.log(status);
  switch (status) {
    case httpStatus.badRequest:
      alert(errorMessage);
      break;
    case httpStatus.unauthorized:
      alert(errorMessage);
      deleteAll();
      // eslint-disable-next-line no-restricted-globals
      location.href = ClientPath.root;
      break;
    default:
      alert(warningMessage.unknownError);
  }
}