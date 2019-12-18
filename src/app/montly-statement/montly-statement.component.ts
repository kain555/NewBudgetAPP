import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MonthExpences } from '../Models/monthExpences';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-montly-statement',
  templateUrl: './montly-statement.component.html',
  styleUrls: ['./montly-statement.component.css']
})
export class MontlyStatementComponent implements OnInit {

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  public monthExpences = [];
  public budgeted: string;
  public bId: number;
  public month: number;
  public year: number;
  mExpences: FormGroup;

  public budgets = [];

  public months = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12];
  public years = [2018, 2019, 2020, 2021, 2022];


  ngOnInit() {
    this.httpService.getBudgets().subscribe(
      budget => {
        this.budgets = budget;
      }
    );
    this.mExpences = this.formBuilder.group ({
      budget: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
    });
  }

  show() {
    this.bId = this.mExpences.get('budget').value;
    this.month = this.mExpences.get('month').value;
    this.year = this.mExpences.get('year').value;
    this.httpService.getMonthExpences(this.bId, this.month, this.year).subscribe(
      (mExpence: []) => {
        this.monthExpences = mExpence;
        console.log(this.monthExpences);
      }
    );
  }

}
