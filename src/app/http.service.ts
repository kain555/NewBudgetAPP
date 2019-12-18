import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expences } from './Models/expences';
import { Budget } from './Models/budgets';
import { Categories } from './Models/categories';
import { Lines } from './Models/lines';
import { BudgetScheme } from './Models/budget_scheme';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }
    Pbid: string;
    Pmonth: string;
    Pyear: string;

    getExpences(): Observable<Array<Expences>> {
        return this.http.get<Array<Expences>>('https://localhost:44353/api/expences');
    }

    addExpences(expences: Expences): Observable<Expences> {
        return this.http.post<Expences>('https://localhost:44353/api/expences', expences, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')});
    }

    getBudgets(): Observable<Array<Budget>> {
        return this.http.get<Array<Budget>>('https://localhost:44353/api/budgets');
    }

    getCategories(): Observable<Array<Categories>> {
        return this.http.get<Array<Categories>>('https://localhost:44353/api/categoryl');
    }

    getLines(): Observable<Array<Lines>> {
        return this.http.get<Array<Lines>>('https://localhost:44353/api/Lines');
    }
    addBudget(budgets: Budget): Observable<Budget> {
        return this.http.post<Budget>('https://localhost:44353/api/budgets', budgets, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')});
    }

    addScheme(scheme: BudgetScheme): Observable<BudgetScheme> {
        return this.http.post<BudgetScheme>('https://localhost:44353/api/scheme', scheme, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')});
    }

    getBudgeted(bid: number, month: number, year: number): any {
        let params1 = new HttpParams();
        this.Pbid = bid.toString();
        this.Pmonth = month.toString();
        this.Pyear = year.toString();
        params1 = params1.append('bid', this.Pbid);
        params1 = params1.append('month', this.Pmonth);
        params1 = params1.append('year', this.Pyear);
        return this.http.get('https://localhost:44353/api/budgets', {params: params1});
    }

    getScheme(bid: number, month: number, year: number): any {
        let params1 = new HttpParams();
        this.Pbid = bid.toString();
        this.Pmonth = month.toString();
        this.Pyear = year.toString();
        params1 = params1.append('bid', this.Pbid);
        params1 = params1.append('month', this.Pmonth);
        params1 = params1.append('year', this.Pyear);
        return this.http.get('https://localhost:44353/api/scheme', {params: params1});
    }

    getMonthExpences(bid: number, month: number, year: number): any {
        let params1 = new HttpParams();
        this.Pbid = bid.toString();
        this.Pmonth = month.toString();
        this.Pyear = year.toString();
        params1 = params1.append('bid', this.Pbid);
        params1 = params1.append('month', this.Pmonth);
        params1 = params1.append('year', this.Pyear);
        return this.http.get('https://localhost:44353/api/expences', {params: params1});
    }

    getProducts(): Observable<Array<any>> {
        return this.http.get<Array<any>>('https://localhost:44353/api/getex');
    }

    deleteBudget(bid: number): any {
        let params1 = new HttpParams();
        this.Pbid = bid.toString();
        params1 = params1.append('bid', this.Pbid);
        return this.http.get('https://localhost:44353/api/budgets', {params: params1});
    }

}
