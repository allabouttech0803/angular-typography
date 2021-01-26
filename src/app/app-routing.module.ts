import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstTypographyComponent } from "./components/first-typography/first-typography.component";
import { SecondTypographyComponent } from "./components/second-typography/second-typography.component";
import { ThirdTypographyComponent } from "./components/third-typography/third-typography.component";
import { FourthTypographyComponent } from './components/fourth-typography/fourth-typography.component';
import { FifthTypographyComponent } from './components/fifth-typography/fifth-typography.component';
import { SixthTypographyComponent } from './components/sixth-typography/sixth-typography.component';

const routes: Routes = [
  { path: "first-typography", component: FirstTypographyComponent },
  { path: "second-typography", component: SecondTypographyComponent },
  { path: "third-typography", component: ThirdTypographyComponent },
  { path: "fourth-typography", component: FourthTypographyComponent },
  { path: "fifth-typography", component: FifthTypographyComponent },
  { path: "sixth-typography", component: SixthTypographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
