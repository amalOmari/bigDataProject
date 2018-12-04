import { Component, OnInit } from '@angular/core';
import {PostsService} from '../Shared/Post/post.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail-poste',
  templateUrl: './detail-poste.component.html',
  styleUrls: ['./detail-poste.component.css']
})
export class DetailPosteComponent implements OnInit {
  routeSub:any;
  id:number;
  post:any;
  newComment:any;
  contentComment:any;
  nbLike:number=0;
  constructor(private route: ActivatedRoute,private postsService : PostsService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id >> ', this.id);
    });
    console.log(this.postsService.getPostById(this.id));
    this.postsService.getPostById(this.id).subscribe(
      (data: any) => {
        this.post=data;

        console.log(this.post);
      });
  }


  commenter(form?: NgForm){

    let comment={
      id:'',
      dateCreation:new Date(),
      text:form.value.comment,
      auteur:JSON.parse(sessionStorage.getItem('user'))

    }

    this.contentComment=comment;
    console.log(form.value.comment);
    console.log("Last Comment: "+JSON.stringify(comment));
    this.postsService.commenter(this.id,comment).subscribe(data => {


    console.log("Data: "+JSON.stringify(data));
    console.log("Commentaire ajouté ");
    this.newComment="";
    });
  
  }
  liker(){

    this.postsService.liker(this.id,JSON.parse(sessionStorage.getItem('user'))).subscribe(data => {

      this.nbLike=data.length;
      console.log("Taille :"+data.length);

      console.log("Like ajouté ");
    
    });

  }

}
