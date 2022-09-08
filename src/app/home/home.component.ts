import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  service: GoalApiService;


  constructor(service: GoalApiService, private router: Router) {
    this.service = service;
   }

  ngOnInit(): void {
  }


  submit(): void{
    this.router.navigateByUrl('/goals')

  }

  createNew(): void{
    this.service.showUpdate = false;
    this.router.navigateByUrl('/goalupdate')
  }
}
