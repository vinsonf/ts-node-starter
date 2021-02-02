import {ApiConfig, headersNone, methodGet, methodPost} from "../api.service";

export class ResponseLogin {
  success = false;
}
export class ApiGetRoleTypesRequests implements ApiConfig {
  route = '/api/v1/secure/role-types';
  headers = headersNone;
  method = methodPost;
  responseType = ResponseLogin;
  payload: any = null;
}
