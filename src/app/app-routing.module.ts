import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsComponent } from './budgets/budgets.component';
import { ExpencesComponent } from './expences/expences.component';
import { MontlyStatementComponent } from './montly-statement/montly-statement.component';
import { MainComponent } from './main/main.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { MbudgetComponent } from './mbudget/mbudget.component';


const routes: Routes = [
  {path: 'budgets', component: BudgetsComponent},
  {path: 'expences', component: ExpencesComponent},
  {path: 'montlyr', component: MontlyStatementComponent},
  {path: 'main', component: MainComponent},
  {path: 'addBudget', component: AddBudgetComponent},
  {path: 'mbudget', component: MbudgetComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
