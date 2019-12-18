import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Budget } from '../Models/budgets';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public budgets = [];
  public budgeted: string;
  public bId: number;
  public month: number;
  public year: number;
  display = false;
  public expenceSum: string;
  public budName: string;
  public budMonth: number;
  public budYear: number;
  public budOwner: string;
  public monthBudgeted: string;


  ngOnInit() {
    this.httpService.getBudgets().subscribe(
      (budget: []) => {
        this.budgets = budget;
      }
    );
  }

  onClick(budget: Budget) {
    this.bId = budget.budget_id;
    this.month = budget.month;
    this.year = budget.year;
    this.httpService.getBudgeted(this.bId, this.month, this.year).subscribe(
      (expenceSum: string) => {
        this.expenceSum = expenceSum;
        this.budName = budget.name;
        this.budMonth = budget.month;
        this.budYear = budget.year;
        this.budOwner = budget.ownerName;
      }
    );
    this.httpService.getScheme(this.bId, this.month, this.year).subscribe(
      (monthBudgeted: string) => {
        this.monthBudgeted = monthBudgeted;
      }
    );
    this.display = true;
  }

  delete(budget: Budget) {
    this.bId = budget.budget_id;
    this.httpService.deleteBudget(this.bId).subscribe(
      (deleted: string) => {
      }
    );
    window.location.reload();
  }
}
