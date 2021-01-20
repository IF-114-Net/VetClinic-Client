import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-client-register-form',
  templateUrl: './client-register-form.component.html',
  styleUrls: ['./client-register-form.component.css']
})
export class ClientRegisterFormComponent implements OnInit {
  model: any = {}
  models: any
  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
  }


  register()
  {
    this.apiService.addEntity('Client', this.model).subscribe();
    console.log(this.model);
  }

  cancel()
  {
    this.model = null;
    console.log("cancelled");
  }

}
