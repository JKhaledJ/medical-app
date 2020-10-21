import { Observable, Observer, throwError } from 'rxjs';
import { DoctorClass } from './Classes/Doctor';
import { Doctor } from './../AdminShared/Doctor.model';
import { GetDoctorByID, UpdateDoctorProfile, UpdateDoctorPhoto } from './../../linkConstants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
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
    return this.http.put<any>(UpdateDoctorProfile,data,{headers: this.httpHeader,observe:"response"})
    .pipe(catchError(this.handlingError));
  }
  private handlingError(ErrorResponse: HttpErrorResponse) {

    let errorMessage = 'There is an error.';
    console.log(ErrorResponse);
    if (!ErrorResponse.error || !ErrorResponse.error.error) {
        return throwError(errorMessage)
    }
    switch (ErrorResponse.status) {
        case 400: errorMessage = 'bad request'; break;
        case 500: errorMessage = 'Internal Server Error'; break;
        default: errorMessage = ErrorResponse.error.error.message;
    }
    return throwError(errorMessage);
  }

  ImageUpload(formData: FormData,doctorID:number){
    return this.http.post(UpdateDoctorPhoto+doctorID,formData,{headers: this.httpHeader,observe:"response"});
  }
}
