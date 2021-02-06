import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assess-dialog',
  templateUrl: './assess-dialog.component.html',
  styleUrls: ['./assess-dialog.component.css']
})
export class AssessDialogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<AssessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
