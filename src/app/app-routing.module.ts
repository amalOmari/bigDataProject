import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PostsComponent} from './posts/posts.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {AjoutPostComponent} from './ajout-post/ajout-post.component';
import {DetailPosteComponent} from './detail-poste/detail-poste.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'subscribe', component: SubscribeComponent},
  { path: 'ajoutPost', component: AjoutPostComponent},
  { path: 'detailPoste/:id', component: DetailPosteComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
