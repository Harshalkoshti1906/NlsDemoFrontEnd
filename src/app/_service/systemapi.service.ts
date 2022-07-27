import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')! 

    })
};


@Injectable({
  providedIn: 'root'
})
export class SystemapiService {

  constructor(private httpClient: HttpClient) { }

  setUserId(UserId: string){
    sessionStorage.setItem("isLoggedIn","true");
    sessionStorage.setItem("userId",UserId);
  }
  setUser(User: any){
    sessionStorage.setItem("currentUser",JSON.stringify(User));
  }

  setIsLoggedIn(value:string){
    sessionStorage.setItem("isLoggedIn",value);
  }

  setToken(token:string){
    sessionStorage.setItem("token",token);
  }

  getUserId(){
    return sessionStorage.getItem("userId");
  }
  getUser(){
    return sessionStorage.getItem("currentUser");
  }
  getUserLoggedIn(){
    return sessionStorage.getItem("isLoggedIn");
  }
  getToken(){
    return sessionStorage.getItem("token");
  }

  //#region  Method   

  getMovieCatalog(){    
    return this.httpClient.get(`${environment.apiUrl}api/MovieCatalog/GetMovieCatalog`,httpOptions);
  }

  getUserDataById(Id:string){
    return this.httpClient.get(`${environment.apiUrl}api/SystemUser/GetById?Id=${parseInt(Id)}`,httpOptions);
  }

  updateProfile(model:any){
    return this.httpClient.post<any>(`${environment.apiUrl}api/SystemUser/UpdateUser`, JSON.stringify(model),httpOptions)
    .pipe(map((model: any) => {
        return model;
    }));
  }
  //#endregion

  
}
