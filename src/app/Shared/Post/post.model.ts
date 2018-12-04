import { User } from '../User/user.model';

export class Post {
    id: string;
    titre:String;
    text:string;
    fichier:string;
    datePublication:String;
    auteur:User;
    image:String

}
