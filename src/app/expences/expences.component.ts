import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Expences } from '../Models/expences';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-expences',
  templateUrl: './expences.component.html',
  styleUrls: ['./expences.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }
    `],
    providers: [MessageService]
})
export class ExpencesComponent implements OnInit {

  constructor(private httpService: HttpService,  private formBuilder: FormBuilder, private messageService: MessageService) { }

  expences: FormGroup;
  objExpences: Expences;
  public budgets = [];
  public categories = [];
  public lines = [];
  public products = [];
  msgs: Message[] = [];
  showMsg = false;

  public methods = ['Cash', 'Card', 'Online payment', 'PayPal', 'Blik'];

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
    this.httpService.getProducts().subscribe(
      product => {
        this.products = product;
      }
    );

    this.expences = this.formBuilder.group ({
        name: new FormControl(''),
        budget: new FormControl('budget'),
        category: new FormControl('category'),
        line: new FormControl('line'),
        amount: new FormControl('0.00'),
        date: new FormControl('date'),
        pmethod: new FormControl(''),
        buyer: new FormControl('')
      });
}

  onSubmit() {
    const expencesData: Expences = {
      Expence_id: 0,
      Budget_id: this.expences.get('budget').value,
      Line_id: this.expences.get('line').value,
      Category_id: this.expences.get('category').value,
      Name: this.expences.get('name').value,
      Amount: this.expences.get('amount').value,
      Date: this.expences.get('date').value,
      PaymentMethod: this.expences.get('pmethod').value,
      Comment: this.expences.get('buyer').value,
      };
    this.httpService.addExpences(expencesData).subscribe(
      expence => {
        console.log(expence);
      }
    );
    this.expences.reset();
    this.showMsg = true;
  }
}
