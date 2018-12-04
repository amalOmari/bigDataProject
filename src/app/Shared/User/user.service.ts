import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { User } from './user.model';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {
  readonly rootUrl = 'http://localhost:8080';
  selectedUser:User;
  userList: User[];
 
  constructor(private http: Http,private httpp: HttpClient) { 
    }


    postUser(user) {
        var body = JSON.stringify(user);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.rootUrl + '/users', body, requestOptions).pipe(map(x => x.json()));
    }


    Authentification(auth){

        var body = JSON.stringify(auth);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.rootUrl + '/users/login', body, requestOptions).pipe(map(x => x.json()));

    }

    getAllUsers() {
        var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.httpp.get(this.rootUrl + '/users', { headers: reqHeader });
        }

    getUsersList() {
        
            this.http.get(this.rootUrl + '/users')
                .pipe(map((data: Response) => {
                    return data.json() as User[];
                })).toPromise().then(x => {
                    this.userList = x;
                  
                   
                })
    
    
    }

    deleteUser(user: User) {
        return this.http.delete(this.rootUrl + '/users' + user).pipe(map(res => res.json()));
    }


     // putAnnonce(Id, user) {
    //     var body = JSON.stringify(user);
    //     var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    //     var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    //     return this.http.put(this.rootUrl + '/users' + Id,
    //         body,
    //         requestOptions).pipe(map(res => res.json()));
    // }


  



   

}
