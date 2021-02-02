import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

export const headersNone = 'none';

type headerProp = 'none' | string;

export const methodGet = 'get';
export const methodPost = 'post';
export const methodPut = 'put';
export const methodDelete = 'delete';
type Methods = 'get' |
  'post' |
  'delete' |
  'put' | string;

export class ApiConfig {
  method: Methods;
  route: string;
  headers: headerProp;
  responseType: any;
  artModeResponse?: any;
  payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string = environment.apiRoute;
  public session = {
    fingerprint: 'ABC',
  };
  public config: ApiConfig;
  public getAction: string;
  public postAction: string;
  public putAction: string;
  public deleteAction: string;
  constructor(
    private http: HttpClient,
  ) { }

  request<T>(config: ApiConfig) {
    switch (config.method ) {
      case 'put':
        return this.put(config.payload, config.route, config.headers);
      case 'post':
        return this.post(config.payload, config.route, config.headers);
      case 'delete':
        return this.delete(config.route, config.headers);
      case 'get':
        return this.get(config.route, config.headers );
      default:
        return this.get(config.route, config.headers );
    }
  }

  public initialize(config: ApiConfig): void {
    this.config = config;
  }

  public post<T>(payload: T, paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers);
    const route = paramRoute || this.config.route;

    return this.http.post(`${this.url}${route}`, payload, headers).pipe(
      shareReplay(),
    );
  }

  public put<T>(payload: T, paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers);
    const route = paramRoute || this.config.route;

    return this.http.put(`${this.url}${route}`, payload, headers).pipe(
      shareReplay(),
    );
  }

  public delete(paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers);
    const route = paramRoute || this.config.route;

    return this.http.delete(`${this.url}${route}`, headers).pipe(
      shareReplay(),
    );
  }

  public get<t>(paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers);
    const route = paramRoute || this.config.route;
    const finalRoute = `${this.url}${route}`;

    return this.http.get(finalRoute, headers).pipe(
      shareReplay(),
    );
  }

  private prepareHeader(headerType: headerProp | string): { headers: HttpHeaders; withCredentials: boolean } {
    let headers = new HttpHeaders();

    if (headerType === 'none') {
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Access-Control-Allow-Origin', '*');
      headers = headers.set('Accept', '*/*');
    }

    return {
      headers,
      withCredentials: true,
    };
  }
}
