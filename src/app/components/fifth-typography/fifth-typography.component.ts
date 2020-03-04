import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-fifth-typography',
  templateUrl: './fifth-typography.component.html',
  styleUrls: ['./fifth-typography.component.scss']
})
export class FifthTypographyComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
