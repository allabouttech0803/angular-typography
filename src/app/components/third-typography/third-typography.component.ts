import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-typography',
  templateUrl: './third-typography.component.html',
  styleUrls: ['./third-typography.component.scss']
})
export class ThirdTypographyComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
