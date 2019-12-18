import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Budget } from '../Models/budgets';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {

  constructor(private httpService: HttpService,  private formBuilder: FormBuilder) { }

  budget: FormGroup;
  objBudget: Budget;
  add = false;
  showMsg = false;

  private validationMessages = {
    name: {
      required: 'firstname is required',
      minlength: 'lastname must have at least 3 characters'
    },
};

  ngOnInit() {
    this.budget = this.formBuilder.group ({
      name: ['', [Validators.required, Validators.minLength(4)]],
      month: '',
      year: '',
      comment: '',
      ownerName: 'Mariusz',
    });
  }

  addBudget() {
  const budgetData: Budget = {
    budget_id: null,
    name: this.budget.get('name').value,
    month: this.budget.get('month').value,
    year: this.budget.get('year').value,
    comment: this.budget.get('comment').value,
    ownerName: this.budget.get('ownerName').value
    };
  this.httpService.addBudget(budgetData).subscribe(
    budget => {
      console.log(budget);
    }
  );
  this.budget.reset();
  this.showMsg = true;
}
}
