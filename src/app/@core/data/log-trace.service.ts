import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LogRequest } from '../../shared/models/models';

@Injectable()
export class SmartTableService {

    // urlPath = 'http://118.180.34.194:8080/imdc-management/web/management';
    urlPath = 'http://localhost:8080/imdc-management/web/management';
    // urlPath = '/imdc-management/web/management';

    constructor(private http: HttpClient) {}

    getConsultaLog(consulta: LogRequest): any {
        const url = `${this.urlPath}/getTrace`;
        const headers = this.getHeaders();

        return this.http.post(url, consulta, {headers});
    }

    getDetalleTrace(consulta: LogRequest): any {
        const url = `${this.urlPath}/getTraceDetails`;
        const headers = this.getHeaders();

        return this.http.post(url, consulta, {headers});
    }

    private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
            'Accept': 'application/json'
        });
        return headers;
    }
}
