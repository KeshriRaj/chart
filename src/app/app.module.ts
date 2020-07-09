import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalComponent } from './vertical/vertical.component';

import { NavbarComponent } from './navbar/navbar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { RadarComponent } from './radar/radar.component';
import { PieComponent } from './pie/pie.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ScatterComponent } from './scatter/scatter.component';
import { PolarComponent } from './polar/polar.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalComponent,
    NavbarComponent,
    DoughnutComponent,
    RadarComponent,
    PieComponent,
    LineChartComponent,
    BubbleComponent,
    ScatterComponent,
    PolarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
