import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SystemapiService } from '../_service/systemapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  UserModel:any;

  constructor(private route:Router,private data:SystemapiService) { }

  ngOnInit(): void {
    this.UserModel =  this.data.getUser();
    this.UserModel = JSON.parse(this.UserModel);
  }

  get isAdmin() {
    return true;
  }

  logout() {
    this.route.navigate(['/login']);
    this.data.setIsLoggedIn('false');
  }

}
