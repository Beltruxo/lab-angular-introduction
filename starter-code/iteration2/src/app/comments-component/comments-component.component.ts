import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
  
})
export class CommentsComponentComponent implements OnInit {
name:string,
content:string,

  constructor() { }

  ngOnInit() {
  }
comments = [
  {
    name: "Belt",
    content: "Life is Life"
  },
  {
    name: "Alejandro",
    content: "All you need is love"
  },
  {
    name: "Tran",
    content: "Live Hard"
  },
  {
    name: "Ale",
    content: "Play Rugby"
  },
  {
    name: "Jandro",
    content: "Die Ugly"
  },
          
]

recordAllTheKeyStrokes(event) {
  console.log(`Key inserted: ${event.key}`);
  //console.log(`Input value: ${event.currentTarget.value}`);
}

addComment(name, content){
  this.comments.push({name, content})
  this.name = []
  this.content = []
}
}