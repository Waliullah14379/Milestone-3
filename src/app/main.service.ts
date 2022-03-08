import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // baseUrl='https://docs.google.com/spreadsheets/d/1W4oHdx_1K3nQfoUm0s2LEMOQUwg33JmFQEl8x0GFoAs/edit#gid='
  baseUrl = 'https://sheetdb.io/api/v1/3ycmprhq4axll'
  constructor(    public http: HttpClient,
    ) { }


  getApi(endPoint, isHeader) {
    var httpHeaders;
    if (isHeader == 0) {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
    } else {
      httpHeaders = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        }),
      };
    }
    return this.http.get(this.baseUrl + endPoint, httpHeaders);
  }
}
