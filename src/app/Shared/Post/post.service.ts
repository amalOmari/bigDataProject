import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {  map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class PostsService {
  readonly rootUrl = 'http://localhost:8080';
  selectedPost:any;
  userList: any[];
 
    constructor(private http: Http,private httpp: HttpClient) { 
    }

    postPost(post) {
        var body = JSON.stringify(post);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.rootUrl + '/posts', body, requestOptions).pipe(map(x => x.json()));
    }


    getPostById(id){
        
       // var body = JSON.stringify(id);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Get, headers: headerOptions });
        return this.http.get(this.rootUrl + '/posts/'+id, requestOptions).pipe(map(x => x.json()));

    }

    getAllPosts() {
        var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.httpp.get(this.rootUrl + '/posts', { headers: reqHeader });
    }


    commenter(id,comment){

            var body = JSON.stringify(comment);
            var headerOptions = new Headers({ 'Content-Type': 'application/json','No-Auth': 'True' });
            var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
            return this.http.post(this.rootUrl + '/posts/comment/'+id, body, requestOptions).pipe(map(x => x.json()));
    }

    
    liker(id,user){

        var body = JSON.stringify(user);
        var headerOptions = new Headers({ 'Content-Type': 'application/json','No-Auth': 'True' });
        var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.rootUrl + '/posts/like/'+id, body, requestOptions).pipe(map(x => x.json()));
    }

   

    deleteUser(id) {
        return this.http.delete(this.rootUrl + '/posts/' + id).pipe(map(res => res.json()));
    }

   


   


  



   

}
