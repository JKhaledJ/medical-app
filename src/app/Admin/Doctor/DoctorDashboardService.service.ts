import { Doctor } from './../AdminShared/Doctor.model';
import { GetDoctorByID } from './../../linkConstants';
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
}
