import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalApiService {

  http :HttpClient;
  goal :any = null;

  showUpdate :boolean = false;
  goalId: any;
  goalName: any;
  goalDescription: any;
  goalImg: any = "../../assets/images/default-goal.png";
  goalTargetDate: any;
  goalTargetAmount: any;
  goalCurrentAmount: any;

  constructor(http :HttpClient) { 
    this.http = http;
  }

  createGoal(goal: any) :Observable<any>{
    return this.http.post(environment.apiUrl + 'goals', goal);
  }

  findAllGoals() :Observable<any>{
    return this.http.get(environment.apiUrl + 'goals');
  }
  
  findGoalById(id: number) :Observable<any>{
    return this.http.get(environment.apiUrl + 'goals/' + id);
  }

  updateGoal(goal: any) :Observable<any>{
    return this.http.put(environment.apiUrl + 'goals/' + goal.id, goal);
  }

  deleteGoal(id: number) :Observable<any>{
    return this.http.delete(environment.apiUrl + 'goals/' + id);
  }


}
