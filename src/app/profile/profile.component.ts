import { Component, OnInit } from '@angular/core';
import { SystemapiService } from '../_service/systemapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId:any;
  user:any;
  response:any;
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  id:number;
  loaderPlay:boolean = false;

  constructor(private data:SystemapiService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onSubmit(){
    this.loaderPlay = true;
    var model = {
      Id:this.id,
      FirstName:this.firstName,
      LastName: this.lastName,
      Email:this.email,
      ContactNo:this.contactNo,
      Password :''
    }

    this.data.updateProfile(model).subscribe(res => {
        this.response = res;
        if(this.response.status == 1){
          this.onLoad();
        }
        this.loaderPlay = false;
    });
  }

  onLoad(){
    this.loaderPlay = true;
    this.userId = this.data.getUserId();
      this.data.getUserDataById(this.userId)
      .subscribe(res => {
        this.loaderPlay = false;
        this.response = res;
        if(this.response.status == 1){
          this.user = this.response.data;
          this.id = this.response.data.id;
          this.firstName = this.response.data.firstName;
          this.lastName = this.response.data.lastName;
          this.email = this.response.data.email;
          this.contactNo = this.response.data.contactNo;
        }
      });
  }
}
