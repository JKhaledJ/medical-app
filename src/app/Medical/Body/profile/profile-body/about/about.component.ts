import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input() DoctorDataDetails:any;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
