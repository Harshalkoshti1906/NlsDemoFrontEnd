import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
import { User } from '../_model/user';
import { Login } from '../_model/login';
import { SystemapiService } from '../_service/systemapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  loginModel:Login;
  response:any;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private data: AuthenticationService,
    private systemApi:SystemapiService) { 
    }




  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  onSubmit() {
    this.error = "";
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.data.login(this.loginForm.value)
      .pipe()
      .subscribe(res => {
        this.response = res;
          if(this.response.status == 1){
            this.systemApi.setUser(this.response.data.user)
            this.systemApi.setUserId(this.response.data.user.id)
            this.systemApi.setToken(this.response.data.token)
            this.router.navigate(['/MovieCatalog']);
          }
          else{
            this.error =this.response.message;
          }
      })      
  }

}
