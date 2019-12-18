import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { ExpencesComponent } from './expences/expences.component';
import { MontlyStatementComponent } from './montly-statement/montly-statement.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { MbudgetComponent } from './mbudget/mbudget.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetsComponent,
    ExpencesComponent,
    MontlyStatementComponent,
    MainComponent,
    AddBudgetComponent,
    BudgetsComponent,
    MbudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    NgbModule,
    AccordionModule,
    BrowserModule,
    TableModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent, BudgetsComponent, MbudgetComponent]
})
export class AppModule { }
