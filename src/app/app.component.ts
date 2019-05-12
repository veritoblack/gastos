import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  showMenu: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  onShowSideBar(showMenu: boolean) {
    this.showMenu = showMenu;
  }

  onRouteSelect(route: String) {
    this.showMenu = false;
    this.router.navigate([route]);
  }


}
