import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GoalApiService } from '../goal-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})

export class GoalComponent implements OnInit {

  service: GoalApiService;
  goal: any = {};

  checkoutForm = new FormGroup({
    goalName: new FormControl('', [Validators.pattern(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/), Validators.required, Validators.minLength(1)]),
    goalDescription: new FormControl('', [Validators.pattern(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/), Validators.required, Validators.minLength(1)]),
    targetDate: new FormControl('', [Validators.required]),
    targetAmount: new FormControl('', [Validators.pattern(/^\+?\d*$/), Validators.required, Validators.minLength(1)]),
    currentAmount: new FormControl('', [Validators.pattern(/^\+?\d*$/), Validators.required, Validators.minLength(1)])

  })

  constructor(service: GoalApiService, private router: Router) { 
    this.service = service;
  }

  ngOnInit(): void {
  }

  updateDate(e: any):void {

  }

  submitUpdate(): void {

  }

  deleteGoal(): void{

  }

}
