import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {PostsService} from '../Shared/Post/post.service';


@Component({
  selector: 'app-ajout-post',
  templateUrl: './ajout-post.component.html',
  styleUrls: ['./ajout-post.component.css']
})
export class AjoutPostComponent implements OnInit {

  constructor(private postService : PostsService) { }

  ngOnInit() {


    // if (sessionStorage.getItem('user')) {
    //   console.log(JSON.parse(sessionStorage.getItem('user'))); //converts to json object
    // } else {
    //   console.log('key dose not exists');
    // }

    this.resetForm();
  }


  resetForm(form?: NgForm){
    this.postService.selectedPost = {
    id:'',
    titre:'',
    text:'',
    fichier:'',
    datePublication:'',
    auteur: sessionStorage.getItem('user'),
   
      
    }
    if (form != null) form.reset();

  }

  onSave(form?: NgForm){


   // console.log("User: "+sessionStorage.getItem('user'));
   this.postService.selectedPost.datePublication=new Date();
    this.postService.selectedPost.auteur=JSON.parse(sessionStorage.getItem('user'));
    //console.log(this.postService.selectedPost);

    console.log(this.postService.selectedPost);
    this.postService.postPost(this.postService.selectedPost)
    .subscribe(data => {
    this.resetForm(form);
    alert("Votre poste été publié !!!");
   // this.router.navigate(['/posts']);
    console.log("Post crée!!");
      
    });

  }


  onFileChange(event){
   // this.postService.selectedPost.image=event.target.files[0].
   if (event.target.files[0].type.toLowerCase().indexOf("image".toLowerCase())!==-1){
    this.postService.selectedPost.image=event.target.files[0].name;
   }else{
    this.postService.selectedPost.video=event.target.files[0].name;
   }
   console.log(event.target.files[0]);
   console.log(event.target.files[0].name);
  }

}
