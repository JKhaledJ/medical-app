import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
@Input() DoctorData:any;
  constructor() { }

  ngOnInit(): void {
    console.log("Qualifications: "+JSON.stringify(this.DoctorData))
  }

}
