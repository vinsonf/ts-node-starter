import {ApiConfig, headersNone, methodPost} from "../api.service";

export class ResponseLogin {
  success = false;
}
export class ApiPostUsers implements ApiConfig {
  route = '/api/v1/secure/users';
  headers = headersNone;
  method = methodPost;
  responseType = ResponseLogin;
  payload: any = null;

  constructor(payload: any) {
    this.payload = payload;
  }
}
