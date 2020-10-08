import { DoctorClass } from './../../../Classes/Doctor';
import { DoctorDashboardService } from './../../../DoctorDashboardService.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editmyprofile',
  templateUrl: './editmyprofile.component.html',
  styleUrls: ['./editmyprofile.component.css']
})
export class EditmyprofileComponent implements OnInit {
  myProfileData: any;
  id: number;
  AllInstitutes:[];
  AllSpecialization:[];
  AllHospital:[];
  myProfileForm: FormGroup;

  constructor(private doctorDashboardService: DoctorDashboardService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    }
    );

    this.doctorDashboardService.getDoctorByID(this.id).subscribe(
      (data: any) => {
        this.myProfileData = data.body;
        this.CreateForm();
      }
    );
  }

  CreateForm() {
    var facebook, instagram, phone;
    let InstitutesArray = <FormArray>this.fb.array([]);
    let SpecializationArray = <FormArray>this.fb.array([]);
    let HospitalArray = <FormArray>this.fb.array([]);

    this.myProfileData.Social_Media.forEach(element => {
      if (element.Social_Media_Name === 'whatsapp' || element.Social_Media_Name === 'telegram') {
        phone = element.Social_Media_Url;
      }
      else if (element.Social_Media_Name === 'facebook') {
        facebook = element.Social_Media_Url;
      }
      else if (element.Social_Media_Name === 'instagram') {
        instagram = element.Social_Media_Url;
      }
    });


    for (let ins of this.myProfileData.Qualifications) {
      InstitutesArray.push(this.fb.group({
        InstituteName: [ins.Institute_Name],
        QualificationName: [ins.Qualification_Name, Validators.required],
        ProcurementDate: [ins.Procurement_Year, Validators.required]
      })
      )
    }
    for (let ins of this.myProfileData.Doctor_Specialization) {
      SpecializationArray.push(this.fb.group({
        SpecializationName: [ins.Specialization.Specialization_Name],
        YearOfExperience: [ins.Years_Of_Experience, Validators.required]
      })
      )
    }
    this.myProfileData.Hospital_Affiliation.forEach(ins=>{
      let timeSlot, firstConsultationFee, followUpConsultationFee: number;
      let AvailableDays: string;
      let startTime, endTime: Date;
      for (let item of ins.Offices) {
        timeSlot = item.Time_Slot_Per_Client_In_Minute;
        firstConsultationFee = item.First_Consultation_Fee;
        followUpConsultationFee = item.Folowup_Consultation_Fee;
        for (let availDays of item.Office_Doctor_Availability) {
          AvailableDays = availDays.Daty_Of_Week;
          startTime = availDays.Start_time;
          endTime = availDays.End_Time;
        }
      }
      HospitalArray.push(this.fb.group({
        HospitalName: [ins.Hospital_Name, Validators.required],
        HospitalCity: [ins.City, Validators.required],
        HospitalCountry: [ins.Country, Validators.required],
        StartDate: [ins.Start_Date, Validators.required],
        EndDate: [ins.End_Date, Validators.required],
        TimeSlot: [timeSlot, Validators.required],
        FirstConsultationFee: [firstConsultationFee, Validators.required],
        FollowUpConsultationFee: [followUpConsultationFee, Validators.required],
        AvailableDays: [AvailableDays, Validators.required],
        StartTime: [startTime, Validators.required],
        EndTime: [endTime, Validators.required],
      })
      )
    });

    this.myProfileForm = this.fb.group({
      FirstName: [this.myProfileData.First_Name, Validators.required],
      LastName: [this.myProfileData.Last_Name, Validators.required],
      ProfessionalStateme: [this.myProfileData.Professional_Stateme],
      Phone: [phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Facebook: [facebook],
      Instagram: [instagram],
      Email: [this.myProfileData.Email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      Address: [this.myProfileData.Address],
      Gender: [this.myProfileData.Gender, Validators.required],
      Institute: InstitutesArray,
      Specialization: SpecializationArray,
      Hospital: HospitalArray,
      About: [this.myProfileData.About, Validators.required]
    })

  }
  get myQualificationControl() {
    return (this.myProfileForm.get('Institute') as FormArray).controls;
  }
  get mySpecializationControl() {
    return (this.myProfileForm.get('Specialization') as FormArray).controls;
  }
  get myHospitalControl() {
    return (this.myProfileForm.get('Hospital') as FormArray).controls;
  }
  addMoreInstitute() {
    (<FormArray>this.myProfileForm.get('Institute')).push(
      this.fb.group({
        InstituteName: [''],
        QualificationName: [''],
        ProcurementDate: ['']
      })
    )
  }
  deleteInstitute(i) {
    (<FormArray>this.myProfileForm.get('Institute')).removeAt(i);
  }

  addMoreSpecialization() {
    (<FormArray>this.myProfileForm.get('Specialization')).push(
      this.fb.group({
        SpecializationName: [''],
        YearOfExperience: ['']
      })
    )
  }
  deleteSpecialization(i) {
    (<FormArray>this.myProfileForm.get('Specialization')).removeAt(i);
  }

  addMoreExperience(){
    (<FormArray>this.myProfileForm.get('Hospital')).push(
      this.fb.group({
        HospitalName: [''],
        HospitalCity: [''],
        HospitalCountry: [''],
        StartDate: [''],
        EndDate: [''],
        TimeSlot: [''],
        FirstConsultationFee: [''],
        FollowUpConsultationFee: [''],
        AvailableDays: [''],
        StartTime: [''],
        EndTime: [''],
      })
    )
  }
  deleteExperience(i) {
    (<FormArray>this.myProfileForm.get('Hospital')).removeAt(i);
  }
  SubmitData() {
    const UpdatedData:DoctorClass={
        ID:this.id,
        FirstName:this.myProfileForm.get('FirstName').value,
        LastName:this.myProfileForm.get('LastName').value,
        ProfessionalStateme:this.myProfileForm.get('ProfessionalStateme').value,
        Phone:this.myProfileForm.get('Phone').value,
        Facebook:this.myProfileForm.get('Facebook').value,
        Instagram:this.myProfileForm.get('Instagram').value,
        Email:this.myProfileForm.get('Email').value,
        Address:this.myProfileForm.get('Address').value,
        Gender:this.myProfileForm.get('Gender').value,
        Qualifications:this.myProfileForm.get('Institute').value,
        Specialization:this.myProfileForm.get('Specialization').value,
        Hospital:this.myProfileForm.get('Hospital').value,
        About:this.myProfileForm.get('About').value
    };
  //  console.log("Yeas "+JSON.stringify(UpdatedData));
    this.doctorDashboardService.updateDoctorProfile(UpdatedData).subscribe(
      (data:any)=>{
       // console.log("updated data: "+JSON.stringify(data.body));
      }
    );
  }
}
