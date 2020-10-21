import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-DoctorDashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: [
    './doctorDashboard.component.css',
    '../assets/css/style.css',
    '../assets/css/select2.min.css',
    '../assets/css/tagsinput.css',
    '../assets/css/font-awesome.min.css',
    '../assets/css/dataTables.bootstrap4.min.css',
    '../assets/css/bootstrap.min.css',
    '../assets/css/bootstrap-datetimepicker.min.css',
    '../assets/css/fullcalendar.min.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class DoctorDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
