import { Doctor } from './Models/doctor.model';
import { Specialization } from './Models/specialization.model';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { GetDoctorSpecializationByDoctorIDUrl,
         GetAllSpecializations,
         GetAllDoctorsBySpecialization, 
         GetDoctorByID } from './../../linkConstants';
import { Department } from './Models/department.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 Departments:Department[];
 Doctors = new ReplaySubject<Doctor[]>();
  Doctor = new Subject<any>();
  constructor(private http:HttpClient) { }

  httpHeader=new HttpHeaders({
    'response-type':'application/json'
  });

  getDepartmentByDoctorID(id:number):Observable<any>{
    return this.http.get<Department>(GetDoctorSpecializationByDoctorIDUrl+id,{headers: this.httpHeader,observe:"response"});
  }
  getAllSpecializations():Observable<any>{
    return this.http.get<Specialization>(GetAllSpecializations,{headers: this.httpHeader,observe:"response"});
  }
  getAllDoctorsBySpecializationID(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(GetAllDoctorsBySpecialization+id,{headers: this.httpHeader,observe:"response"});
  }
  getDoctorByID(id:number){
    return this.http.get<Doctor>(GetDoctorByID+id,{headers: this.httpHeader,observe:"response"});
  }

}
