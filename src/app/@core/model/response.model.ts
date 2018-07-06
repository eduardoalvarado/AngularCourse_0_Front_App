import { PushTrace } from "src/app/@core/model/push-trace.model";

export class ResponseDTO {
    data: PushTrace[];
    pages: number;
    total: number;
    status: string;
  }