import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstTypographyComponent } from './components/first-typography/first-typography.component';
import { SecondTypographyComponent } from './components/second-typography/second-typography.component';
import { ThirdTypographyComponent } from './components/third-typography/third-typography.component';
import { FourthTypographyComponent } from './components/fourth-typography/fourth-typography.component';
import { FifthTypographyComponent } from './components/fifth-typography/fifth-typography.component';
import { SixthTypographyComponent } from './components/sixth-typography/sixth-typography.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTypographyComponent,
    SecondTypographyComponent,
    ThirdTypographyComponent,
    FourthTypographyComponent,
    FifthTypographyComponent,
    SixthTypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
