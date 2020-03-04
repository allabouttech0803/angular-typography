import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sixth-typography',
  templateUrl: './sixth-typography.component.html',
  styleUrls: ['./sixth-typography.component.scss']
})
export class SixthTypographyComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
