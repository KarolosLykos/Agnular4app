import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.name = 'Karolos Karolos';
  	this.age = 30;
    this.email = 'karolos@karolos.com'
  	this.address = {
  		street: 'Athinas 30 str.',
  		city: 'Athens',
  		municipality: 'Attiki',
  	}
  	this.hobbies = [
  		'Music',
  		'Sports',
  		'Movies'
  	];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toddleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
	street:string,
  	city:string,
  	municipality:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}