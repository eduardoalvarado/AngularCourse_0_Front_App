import { LogTrace } from './logTrace.model';

export class LogResponse {
    data: LogTrace[];
    pages: number;
    total: number;
    success: string;

    constructor () {
        this.data = [];
        this.pages = 0;
        this.total = 0;
        this.success = '';
    }
}

export class ResponseTime {
    requestTimeStamp: number;
    responseTimeStamp: number;
    timeTaken: number;

    constructor () {
        this.requestTimeStamp = 0;
        this.responseTimeStamp = 0;
        this.timeTaken = 0;
    }

    getTimeTaken() {
        return (this.responseTimeStamp - this.requestTimeStamp) / 1000;
    }
}
