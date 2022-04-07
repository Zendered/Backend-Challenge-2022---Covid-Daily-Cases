export interface IHttpResponse<T = any> {
  statusCode: number
  data: T
}

export interface IHttpRequest {
    data?: any
  }

export const ok = <T = any> (data: T): IHttpResponse<T> => ({
  statusCode: 200,
  data,
});

export const badRequest = (error: Error): IHttpResponse<Error> => ({
  statusCode: 400,
  data: error,
});
