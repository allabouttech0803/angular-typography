import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-typography',
  templateUrl: './first-typography.component.html',
  styleUrls: ['./first-typography.component.scss']
})
export class FirstTypographyComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.theme$.subscribe(data => console.log(data));
  }

}
