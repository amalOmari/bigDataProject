import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {PostsService} from '../Shared/Post/post.service';
import {Post} from '../Shared/Post/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listPosts:Post[];
  show:boolean=true;
  constructor(private router: Router,private postsService : PostsService) { }

  ngOnInit() {

    this.postsService.getAllPosts().subscribe(
      (data: any) => {
        this.listPosts=data;
        console.log(data);

        if(data){
       data.forEach(obj => obj.selected = false);
      // this.articles = data;
       data.forEach(element => {
          console.log("Post : "+element);
      });

    }
     });


  }

  goto(id){
    let path='/detailPoste/'+id;
    this.router.navigate([path]);
  }

  goToLogin(){
    this.show=false;
    this.router.navigate(['/login']);
  }

}
