import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public sidebarMinimized = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMinimize(e: boolean) {
    this.sidebarMinimized = e;
  }

  backToLogin(){
  }
}
