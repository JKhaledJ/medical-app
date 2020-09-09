import { DepartmentService } from './../../department.service';
import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.css']
})
export class ProfileBodyComponent implements OnInit {
  @Input() Datas:any;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.aboutData.next(this.Datas);
  }
}
