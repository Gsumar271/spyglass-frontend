import { Component, OnInit } from '@angular/core';
import { GoalApiService } from '../goal-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {

  goals: Array<any> = [];
  service: GoalApiService;
  displayDate:any;

  constructor(service: GoalApiService, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.findAllGoals().subscribe(data => {
      this.goals = data;
    })
  }

  submit(e: any): void {
   this.service.goalId = e.target.getAttribute("goal-id");
   this.service.goalName = e.target.getAttribute("goal-name");
   this.service.goalDescription = e.target.getAttribute("goal-description");
//   this.service.goalImg = "../../assets/images/default-goal.png";
   this.service.goalTargetDate = e.target.getAttribute("goal-targetDate");
   this.service.goalTargetAmount = e.target.getAttribute("goal-targetAmount");
   this.service.goalCurrentAmount = e.target.getAttribute("goal-currentAmount");

    this.service.showUpdate = true;
    this.router.navigateByUrl('/goalupdate');
  }

  formatDate(d: any){
     let date = d;
     let dateTemp = new Date(String(date));
     this.displayDate = (dateTemp.getMonth()+1) + "-" + (dateTemp.getDate()) +  "-" +  dateTemp.getFullYear();
     return this.displayDate;
  }

}
