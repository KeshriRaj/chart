import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { RadarComponent } from './radar/radar.component';
import { PieComponent } from './pie/pie.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ScatterComponent } from './scatter/scatter.component';
import { PolarComponent } from './polar/polar.component';


const routes: Routes = [
  {
    path:"",
    component:NavbarComponent
  },
  {
    path:"vertical",
    component:VerticalComponent
  },
  {
      path:"doughnut",
      component:DoughnutComponent
  },
  { 
    path:"radar",
    component:RadarComponent

  },
  { 
    path:"pie",
    component:PieComponent

  },
  { 
    path:"line-chart",
    component:LineChartComponent

  },
  { 
    path:"bubble",
    component:BubbleComponent

  },
  { 
    path:"scatter",
    component:ScatterComponent

  },
  { 
    path:"polar",
    component:PolarComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
