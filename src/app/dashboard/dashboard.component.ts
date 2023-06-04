import { Component } from '@angular/core';
import { DASH_LIST } from '../data/dashboard-hrefs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent {
  dash_list = DASH_LIST
}