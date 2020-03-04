import { Component } from "@angular/core";
import { Observable, Observer, of } from "rxjs";
import { delay } from "rxjs/internal/operators/delay";
import { CommonService } from "./services/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-typography";
  typography$: Observable<string>;
  navLinks = [
    { path: "first-typography", label: "Quicksand Font" },
    { path: "second-typography", label: "Sen Font" },
    { path: "third-typography", label: "Nunito Font" },
    { path: "fourth-typography", label: "Ubuntu Font" },
    { path: "fifth-typography", label: "Oxygen Font" },
    { path: "sixth-typography", label: "Roboto Font" }
  ];

  constructor(public commonService: CommonService) {
    this.commonService.setupRouting();
  }
}
