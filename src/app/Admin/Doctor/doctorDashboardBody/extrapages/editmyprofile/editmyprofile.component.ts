import { DoctorDashboardService } from './../../../DoctorDashboardService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editmyprofile',
  templateUrl: './editmyprofile.component.html',
  styleUrls: ['./editmyprofile.component.css']
})
export class EditmyprofileComponent implements OnInit {
  myProfileData:any;
  id:number;

  myProfileForm:FormGroup;

  constructor(private doctorDashboardService:DoctorDashboardService,
               private route: ActivatedRoute,
               private fb: FormBuilder) { }

  ngOnInit(): void {   
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
     }
   );

   this.doctorDashboardService.getDoctorByID(this.id).subscribe(
    (data:any)=>{
      this.myProfileData=data.body;
    }
  );
  this.CreateForm();
  }

  CreateForm(){
    this.myProfileForm = this.fb.group({
      FirstName:['',Validators.required],
      LastName: ['',Validators.required],
      ProfessionalStateme:[''],
      Phone: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Email: ['', Validators.required],
      Address: [''],
      Gender:['male',Validators.required],
      InstituteName:['',Validators.required],
      QualificationName:['',Validators.required],
      ProcurementDate:['',Validators.required],
      SpecializationName:['',Validators.required],
      YearOfExperience:['',Validators.required],
      HospitalName:['',Validators.required],
      HospitalCity:['',Validators.required],
      HospitalCountry:['',Validators.required],
      StartDate:['',Validators.required],
      EndDate:['',Validators.required],
      TimeSlot:['',Validators.required],
      FirstConsultationFee:['',Validators.required],
      FollowUpConsultationFee:['',Validators.required],
      AvailableDays:['',Validators.required],
      StartTime:['',Validators.required],
      EndTime:['',Validators.required],
      About:['', Validators.required]
    })
  }
  SubmitData(){
    console.log("My profile form: "+this.myProfileForm.get('FirstName').value);
  }
}
