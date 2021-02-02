import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-make-month-report',
  templateUrl: './make-month-report.component.html',
  styleUrls: ['./make-month-report.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class MakeMonthReportComponent implements OnInit {

  date =  new FormControl(moment(), [Validators.required]);
  rentExpense =  new FormControl('', [ Validators.required,  Validators.min(0), ]);
  advertisingExpense =  new FormControl('', [ Validators.required, Validators.min(0), ]);
  utilitiesExpense = new FormControl('', [ Validators.required, Validators.min(0), ]);

  monthReportForm: FormGroup = new FormGroup({
     date: this.date,
     rentExpense: this.rentExpense,
     advertisingExpense: this.advertisingExpense,
     utilitiesExpense: this.utilitiesExpense
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  chosenYearHandler(normalizedYear: Moment): void {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

}
