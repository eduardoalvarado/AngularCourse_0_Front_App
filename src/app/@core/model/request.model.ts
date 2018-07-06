export class RequestDTO {
    public id: string;
    public applicationId: string;
    public clientId: string;
    public requestType: string;
    public errorState: string;
    public startDate: string;
    public endDate: string;
    public startTime: string;
    public endTime: string;
    public currentPage: number;
    public registersInPage: number;
    public constructor(){
      this.id = "";
      this.applicationId = "";
      this.clientId = "";
      this.requestType = "";
      this.errorState = "";
      this.startDate = "";
      this.endDate = "";
      this.startTime = "";
      this.endTime = "";
      this.currentPage = 1;
      this.registersInPage = 10;
    }
  }