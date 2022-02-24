import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { timeout } from 'rxjs';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

  downloadFile(objectId: string): any {
		//return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'});
   // return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'});
const url1 ='http://uat.dieboldnixdorf.com/en-us/documentapi/mw?url=' + encodeURIComponent('https://dn-mgt-ems-scus-ap.azure-api.net/EMSFunction/EMS?userName=OpMan&contextId=2&objectId=' + objectId+'');
    const url = 'https://dn-mgt-ems-scus-ap.azure-api.net/EMSFunction/EMS?userName=opman&contextId=2&objectId='+objectId;
     return this.http.get(url1,{responseType: 'blob',headers : {'Ocp-Apim-Subscription-Key':'5fdadf41b7d3418f9b7970418f7e896a'}}).pipe(
      timeout(60000),
      catchError(e => {
        // do something on a timeout
        return of(null);
      })
    )
  }
  
  downloadFileFromUrl(url:string)
  {
    return this.http.get(url,{responseType: 'blob',headers : {'Ocp-Apim-Subscription-Key':'5fdadf41b7d3418f9b7970418f7e896a'}} );
  }

}