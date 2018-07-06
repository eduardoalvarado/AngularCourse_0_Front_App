
export class LogRequest {
    idMail:string;
    hasBeenSent:string; 
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    recipient:string;
    currentPage: string;
    registersInPage: string;

    constructor() {
        this.idMail = "";
        this.hasBeenSent=""; 
        this.startDate="";
        this.endDate="";
        this.startTime="";
        this.endTime="";
        this.recipient="";
        this.currentPage="";
        this.registersInPage="";
    }
}

export class LogDetailRequest {
    idMail:string;

    constructor(id:string){
        this.idMail = id;
    }
}