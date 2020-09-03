
export class Department{
    public Id: number;
    public DoctorID:number;
    public SpecializationID:number;
    
    constructor(id:number,doctorID:number,specializationID:number){
      this.Id=id;
      this.DoctorID=doctorID;
      this.SpecializationID=specializationID;
    }
}