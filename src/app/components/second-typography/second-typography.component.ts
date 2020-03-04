import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-second-typography',
  templateUrl: './second-typography.component.html',
  styleUrls: ['./second-typography.component.scss']
})
export class SecondTypographyComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
