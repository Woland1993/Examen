import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent {

  constructor(
 private router: Router,private route:ActivatedRoute) {  }
new(){
  this.router.navigateByUrl('new');
}
}
