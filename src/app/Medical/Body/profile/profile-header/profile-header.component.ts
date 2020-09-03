import { DepartmentService } from './../../department.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() Data:any;
  constructor() {
   }
  
  ngOnInit(): void {

  }
}
