import {HttpHeaders} from "@angular/common/http";

export const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json' })
};
