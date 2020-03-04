import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-fourth-typography',
  templateUrl: './fourth-typography.component.html',
  styleUrls: ['./fourth-typography.component.scss']
})
export class FourthTypographyComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
