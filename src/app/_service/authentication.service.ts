import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../_model/user';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    public user: Observable<User>;
  
  constructor(
    private router: Router,
        private http: HttpClient 
  ) { }

  login(user:any) {
    var model = {Username :user.username,Password : user.password }
    return this.http.post<any>(`${environment.apiUrl}api/Account/login`, JSON.stringify(model),httpOptions)
        .pipe(map((user: any) => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }));
}
}
