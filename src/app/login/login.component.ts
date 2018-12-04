import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../Shared/user/user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth:any;
  constructor(private userService : UserService,private router :Router) { }

  ngOnInit() {

   

    this.resetForm();
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

  onSend(form?: NgForm){

    this.auth={
      login:this.userService.selectedUser.login,
      password:this.userService.selectedUser.password
    }

    //console.log("Voila "+this.auth);

    this.userService.Authentification(this.auth)
    .subscribe((data) => {
      // JSON.parse(sessionStorage.getItem('user'));
      sessionStorage.setItem('user',JSON.stringify(data));
    //  sessionStorage.setItem('test','kaltoum');
    //  console.log("Voila user : "+JSON.parse(sessionStorage.getItem('user')));
    console.log("Voila user : "+sessionStorage.getItem('user'));
      this.resetForm(form);
      console.log(data);
      console.log("Auth!!");
     // alert("Authetification réussie !!!");
      this.router.navigate(['/posts']);
      },

      (error)=>{

        alert("Erreur d'authentification !!!");
        console.log('error');
      });

  }

}
