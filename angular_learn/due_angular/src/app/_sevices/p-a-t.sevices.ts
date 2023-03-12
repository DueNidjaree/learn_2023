import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,tap,catchError,of,throwError  } from 'rxjs';
import { Tambon,Province,Amphure,ZipCode} from './../_models/index';

@Injectable({
    providedIn: 'root'
  })
  export class ProvAmpTamService {
  
    constructor(
      private http: HttpClient,
    ) { 
    }

 


    getProvince(): Observable<Province[]> {
        return this.http.get<Province[]>("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json")
    }
      
    getAmphure(province_id:number): Observable<Amphure[]> {
        return this.http.get<Amphure[]>("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json").pipe(map(res => {
          let ret =res.filter(i => i.province_id==province_id);
          return ret;
        }))
    }

    getTambon(amphure_id:number): Observable<Tambon[]> {
        return this.http.get<Tambon[]>("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json").pipe(map(res => {
          let ret =res.filter(i => i.amphure_id==amphure_id);
          return ret;
        }))
    }

    getZipCode(SUB_DISTRICT_CODE:string): Observable<ZipCode[]> {
        return this.http.get<ZipCode[]>("https://raw.githubusercontent.com/Cerberus/Thailand-Address/master/zipcodes.json").pipe(map(res => {
          let ret =res.filter(i => i.SUB_DISTRICT_CODE==SUB_DISTRICT_CODE);
          return ret;
    }))
}


}