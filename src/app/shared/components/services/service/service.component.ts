import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../../services/service.service';
import {NotificationService} from '../../../../services/notification.service';
import {Service} from '../../../../models/service/service';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public service: ServiceService, public notificationService: NotificationService,
              public dialogRef: MatDialogRef<ServiceComponent>) { }

  ngOnInit(): void {
    this.service.getServices();
  }

  onSubmit(form: NgForm): void {
    // tslint:disable-next-line:triple-equals
    if (!this.service.formData.id){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm): void{
    if (form.form.valid){
      this.service.addService().subscribe(
        res => {
          this.resetForm(form);
        }, err => { console.log(err); }
      );
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  updateRecord(form: NgForm): void{
    if (form.form.valid){
      this.service.updateService().subscribe(
        res => {
          this.resetForm(form);
        }, err => { console.log(err); }
      );
      this.notificationService.info(':: Updated successfully');
      this.onClose();
    }
  }

  onClose(): void{
    this.service.formData = new Service();
    this.dialogRef.close();
  }

  resetForm(form: NgForm): void{
    form.form.reset();
    this.service.formData = new Service();
  }

}
