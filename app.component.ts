import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit{

constructor(private router: Router ) {

}

ngOnInit(): void {
this.
checkRoute()
}

  title = 'QuniQ';
  loginpage = false;


checkRoute(){
If(this.router.url === '');{
this.loginpage=true;
}
}
}

function If(arg0: boolean) {
  throw new Error('Function not implemented.');
}
