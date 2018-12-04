import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../Shared/user/user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  userToPost:any;
  constructor(private userService : UserService,private router :Router) { }

  ngOnInit() {

    this.resetForm();
    //this.userService.getUsersList();

    this.userService.getAllUsers().subscribe(
      (data: any) => {
     console.log("Voila data : "+data);

     data.forEach(element => {
      console.log("Voila element 1 : "+element.nom);

       
     });
     });
  }

  resetForm(form?: NgForm){
    this.userService.selectedUser = {
      id: '',
      nom: '',
      prenom:'',
      login:'',
      password:'',
      dateNaissance:'',
      profil:''
      
    }
    if (form != null) form.reset();

  }

  onSave(form?: NgForm){

    this.userService.postUser(this.userService.selectedUser)
    .subscribe(data => {
    this.resetForm(form);
    alert("Votre compte e été crée !!!");
    sessionStorage.setItem('user',JSON.stringify(data));
    this.router.navigate(['/posts']);
    console.log("Compte crée!!");
  
    });

  }

}
