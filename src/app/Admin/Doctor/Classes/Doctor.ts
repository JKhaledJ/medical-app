export class DoctorClass {
    constructor(
        Id,
        FirstName:string,
        LastName:string,
        ProfessionalStateme:string,
        Phone:string,
        Facebook:string,
        Instagram:string,
        Email:string,
        Address:string,
        Gender:string,
        Qualifications:[{InstituteName:string,QualificationName:string,ProcurementDate:Date}],
        Specialization:[{SpecializationName:string, YearOfExperience:number}],
        Hospital:[{
            HospitalName:string,
            HospitalCity:string,
            HospitalCountry:string,
            StartDate:Date,
            EndDate:Date,
            TimeSlot:number,
            FirstConsultationFee:number,
            FollowUpConsultationFee:number,
            AvailableDays:string,
            StartTime:Date,
            EndTime:Date
        }],
        About:string

    ){}
}
