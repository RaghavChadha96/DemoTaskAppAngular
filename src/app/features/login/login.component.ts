import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RootObject } from 'src/app/models/user-model';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public showError: boolean;
  public users: RootObject[];
  constructor(private fb: FormBuilder, private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public onSubmit() {
    debugger;
    this.loginservice.getUsers().subscribe((value) => {
      this.users = [...value];

      for (let i = 0; i < this.users.length; i++) {
        if (this.loginForm.value.username === this.users[i].username && this.loginForm.value.password === this.users[i].name) {
          this.router.navigate(['/home']);
          return;
        }
        if(i==this.users.length-1){
          this.showError=true;
        }
      }    
    });
  }

}
