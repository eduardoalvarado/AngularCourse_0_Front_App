import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PushTrace } from 'src/app/@core/model/push-trace.model';
import { Observable } from 'rxjs/Observable';
import { ResponseDTO } from 'src/app/@core/model/response.model';
import { RequestDTO } from 'src/app/@core/model/request.model';

@Injectable()
export class PushTraceService {

  urlPath:string = " http://118.180.34.194:8080/push.management/trace"
    /*
  dataPag1 : ResponseDTO = {
    "traceList":[{
        "_id": "4d6ac394-2904-4d6ac394-2904",
        "requestType": "Enroll",
        "clients": ["99999999"],
        "date": 1528931213000,
        "applicationId": "BBVA_WALLET",
        "errorState": "ok"
       },
       {
        "_id": "67fdd8ef-d2e9-67fdd8ef-d2e9",
        "requestType": "Enroll",
        "clients": ["99999998"],
        "date": 1528931019000,
        "applicationId": "BBVA_WALLET",
        "errorState": "error total"
       },
       {
        "_id": "46f9f9ed-60cf-46f9f9ed-60cf",
        "requestType": "Enroll",
        "clients": ["99999997","99999996"],
        "date": 1528931376000,
        "applicationId": "BBVA_WALLET",
        "errorState": "error parcial"
       },
       {
        "_id": "5a99f9ef-cd69-5a99f9ef-cd69",
        "requestType": "Enroll",
        "clients": ["99999995"],
        "date": 1528931380000,
        "applicationId": "BBVA_GLOMO",
        "errorState": "ok"
       }],
    "pages": 2,
    "total": 7,
    "status": "202"
  };

  dataPag2 : ResponseDTO = {
    "traceList":[{
        "_id": "4d6ac394-2904-4d6ac394-2904",
        "requestType": "Enroll",
        "clients": ["99999994"],
        "date": 1528931213000,
        "applicationId": "BBVA_GLOMO",
        "errorState": "ok"
       },
       {
        "_id": "67fdd8ef-d2e9-67fdd8ef-d2e9",
        "requestType": "Enroll",
        "clients": ["99999993"],
        "date": 1528931019000,
        "applicationId": "BBVA_WALLET",
        "errorState": "ok"
       },
       {
        "_id": "46f9f9ed-60cf-46f9f9ed-60cf",
        "requestType": "Enroll",
        "clients": ["99999992"],
        "date": 1528931378000,
        "applicationId": "BBVA_WALLET",
        "errorState": "error total"
       }],
    "pages": 2,
    "total": 7,
    "status": "202"
  };
*/
    constructor(private http:HttpClient){}

    getConsultaLog(requestBody:RequestDTO): any {
        let url = `${this.urlPath}/getTrace`;
        let headers = this.getHeaders();
        return this.http.post(url, requestBody, {headers});
        /*if (requestBody.currentPage == 1)
            return this.dataPag1;
        if (requestBody.currentPage == 2)
            return this.dataPag2;*/
    }

    private getHeaders(): HttpHeaders {
        let headers = new HttpHeaders({
            'Content-Type': 'text/plain',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });
        return headers;
    }
}
