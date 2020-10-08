import { Observable } from 'rxjs';
import { DoctorClass } from './Classes/Doctor';
import { Doctor } from './../AdminShared/Doctor.model';
import { GetDoctorByID, UpdateDoctorProfile } from './../../linkConstants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorDashboardService {

constructor(private http:HttpClient) { }
  httpHeader=new HttpHeaders({
    'response-type':'application/json'
  });
  getDoctorByID(id:number){
    return this.http.get<Doctor>(GetDoctorByID+id,{headers: this.httpHeader,observe:"response"});
  }
  updateDoctorProfile(data:DoctorClass):Observable<any>{
    return this.http.put(UpdateDoctorProfile,data,{headers: this.httpHeader,observe:"response"});
  }
}
