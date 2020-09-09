import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popularity-panel',
  templateUrl: './popularity-panel.component.html',
  styleUrls: ['./popularity-panel.component.css']
})
export class PopularityPanelComponent implements OnInit {
@Input() DoctorData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
