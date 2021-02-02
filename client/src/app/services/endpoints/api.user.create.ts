import {ApiConfig, headersNone, methodPost} from "../api.service";
import {ResponseLogin} from "./users.requests";

export class ApiUserCreate implements ApiConfig {
  route = '/api/v1/secure/user-create';
  headers = headersNone;
  method = methodPost;
  responseType = ResponseLogin;
  payload: any = null;

  constructor(payload: any) {
    this.payload = payload;
  }
}
