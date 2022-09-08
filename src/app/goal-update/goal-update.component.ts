import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { DatePipe } from '@angular/common'

 
@Component({
  selector: 'app-goal-update',
  templateUrl: './goal-update.component.html',
  styleUrls: ['./goal-update.component.scss']
})
export class GoalUpdateComponent implements OnInit {


  goal: any = {};
  service: GoalApiService;
  showUpdate: boolean;

  constructor(service: GoalApiService, private formBuilder:FormBuilder, private router: Router) {
      this.service = service;
      this.showUpdate = this.service.showUpdate;
   }



 goalForm = new FormGroup({
    goalName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    goalDescription: new FormControl('', [Validators.pattern(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/), Validators.required, Validators.minLength(1)]),
    targetDate: new FormControl('', [Validators.required]),
    targetAmount: new FormControl('', [Validators.required, Validators.minLength(1)]),
    currentAmount: new FormControl('', [Validators.required, Validators.minLength(1)])

  })
  // goalForm = this.formBuilder.group({
  //   goalName:['', Validators.pattern(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/), Validators.required, Validators.minLength(1)],
  //   goalDescription:['', Validators.pattern(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/), Validators.required, Validators.minLength(1)],
  //   targetDate:['', Validators.required],
  //   targetAmount:['', Validators.pattern(/^\+?\d*$/), Validators.required, Validators.minLength(1)],
  //   currentAmount:['', Validators.pattern(/^\+?\d*$/), Validators.required, Validators.minLength(1)]
  // })

  ngOnInit(): void {
    if(this.service.showUpdate == false){
        this.goal.name = '';
        this.goal.description = '';
        this.goal.imageSrc = this.service.goalImg; //a default temporary image 
        this.goal.targetDate = '';
        this.goal.targetAmount = '';
        this.goal.currentAmount = '';
      //  console.log("ng on init", this.goal.imageSrc);
    }
    else{
      this.service.findGoalById(this.service.goalId).subscribe(data => {
        this.service.goal = data;
        this.goal.id = parseInt(this.service.goalId);
        this.goal.name = this.service.goal.name;
        this.goal.description = this.service.goal.description;
        this.goal.imageSrc = this.service.goalImg; //a default temporary image 
        this.goal.targetDate = this.service.goal.targetDate;
        this.goal.targetAmount = this.service.goal.targetAmount;
        this.goal.currentAmount = this.service.goal.currentAmount;

      });

    }
  }


  submitSave(): void {
    let date = this.goal.targetDate;
    let dateTemp = new Date(String(date));
    let setDate = dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + dateTemp.getDate();
    this.goal.targetDate = setDate;

   // console.log("save", this.goal);

    this.service.createGoal(this.goal).subscribe(data => {
        this.goal = data;
    })

    this.router.navigateByUrl('/home');
   // this.router.navigate('/goals');

  }

  submitUpdate(): void{

    let date = this.goal.targetDate;
    let dateTemp = new Date(String(date));
    let setDate = dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + dateTemp.getDate();
    this.goal.targetDate = setDate;

   // console.log("update", this.goal);

    this.service.updateGoal(this.goal).subscribe(data => {
      this.goal = data;
    })

    this.router.navigateByUrl('/home');



  }

  submitDelete(): void{

    this.service.deleteGoal(this.service.goalId).subscribe(data => {});
    this.router.navigateByUrl('/home');


  }

}
