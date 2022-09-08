import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalUpdateComponent } from './goal-update/goal-update.component';
import { GoalComponent } from './goal/goal.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'goals', component: GoalListComponent},
  {path: 'goal', component: GoalComponent},
  {path: 'goalupdate', component: GoalUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
