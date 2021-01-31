import {ApiConfig, headersNone, methodPost} from "../api.service";

export class ResponseLogin {
  success = false;
}
export class ApiPostAuthLogin implements ApiConfig {
  route = '/api/v1/public/login';
  headers = headersNone;
  method = methodPost;
  responseType = ResponseLogin;
  payload: any = null;

  constructor(payload: any) {
    this.payload = payload;
  }
}

export class ApiGetAuthLogout implements ApiConfig {
  route = '/api/v1/public/logout';
  headers = headersNone;
  method = methodPost;
  responseType = ResponseLogin;
}

export class ApiResetPassword implements ApiConfig {
  route = '/api/v1/public/password-reset';
  headers = headersNone;
  method = methodPost;
  responseType = ResponseLogin;
  payload: {password: string, token: string};

  constructor(payload: {password: string, token: string, email: string}) {
    this.payload = payload;
  }
}
