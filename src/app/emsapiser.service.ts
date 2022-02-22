import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Locations} from './locations'


@Injectable({
  providedIn: 'root'
})
export class EmsapiserService {

  constructor(private http: HttpClient) {}

  getEMSFeed1(){    
    const headers= new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Ocp-Apim-Subscription-Key','c34a4fb7cfc54f688576560c29eb688c');

      return this.http.get<any>('https://dn-dev-ems-scus-ap.azure-api.net/DN-DEV-EMSConsole-SCUS-FA/EMS_Console?procId=2049',{ headers: headers }); 
  }  

  getEMSFeed2(){ 
    
    /*const apiUrl = `https://dn-dev-ems-scus-ap.azure-api.net/DN-DEV-EMSConsole-SCUS-FA/EMS_Console?procId=2049`; */
    const apiUrl = 'http://localhost:50539/Api/TestApi';
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Ocp-Apim-Subscription-Key','c34a4fb7cfc54f688576560c29eb688c');

    return this.http.get<any[]>(apiUrl, {headers});
    
      }  

      getEMSFeed(){ 
       const url = 'https://dn-dev-ems-scus-ap.azure-api.net/DN-DEV-EMSConsole-SCUS-FA/EMS_Console?procId=2049';
       let headers = new HttpHeaders();
        headers.append('Ocp-Apim-Subscription-Key','c34a4fb7cfc54f688576560c29eb688c');
       return this.http.get<Locations[]>(url,{headers : {'Ocp-Apim-Subscription-Key':'c34a4fb7cfc54f688576560c29eb688c'}} );

      }
      
}

