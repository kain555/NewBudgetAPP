import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Expences } from '../Models/expences';
import { HttpService } from '../http.service';
import { Scheduler } from 'rxjs';
import { BudgetScheme } from '../Models/budget_scheme';

@Component({
  selector: 'app-mbudget',
  templateUrl: './mbudget.component.html',
  styleUrls: ['./mbudget.component.css']
})
export class MbudgetComponent implements OnInit {

  constructor(private httpService: HttpService,  private formBuilder: FormBuilder) {}
  scheme: FormGroup;
  schemeObj: BudgetScheme;
  public budgets = [];
  public categories = [];
  public lines = [];

  public months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public years = [2018, 2019, 2020, 2021, 2022];

  ngOnInit() {
    this.httpService.getBudgets().subscribe(
      budget => {
        this.budgets = budget;
      }
    );
    this.httpService.getCategories().subscribe(
      category => {
        this.categories = category;
      }
    );
    this.httpService.getLines().subscribe(
      line => {
        this.lines = line;
      }
    );
    this.scheme = this.formBuilder.group ({
        budget: new FormControl('budget'),
        line: new FormControl('line'),
        category: new FormControl('category'),
        BLineValue: new FormControl(''),
        month: new FormControl(''),
        year: new FormControl(''),
      });
}

onSubmit() {
  const schemeObj: BudgetScheme = {
    Scheme_id: 0,
    Budget_id: this.scheme.get('budget').value,
    Line_id: this.scheme.get('line').value,
    Category_id: this.scheme.get('category').value,
    BLineValue: this.scheme.get('BLineValue').value,
    Month: this.scheme.get('month').value,
    Year: this.scheme.get('year').value,
    };
  this.httpService.addScheme(schemeObj).subscribe(
    scheme => {
      console.log(scheme);
    }
  );
  this.scheme.reset();
}

}
