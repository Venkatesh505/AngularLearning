import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  //  selector: '.app-servers',
   selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
addNewServer=false;
newserverstatus="No Server Created";
textentered='Initialtext';
  constructor() {
    setTimeout(() => {this.addNewServer=true;},2000)
   }

  ngOnInit() {
  }
onServerCreate() 
{
this.newserverstatus="New Server Created is " + this.textentered;
}
enterservername(event: Event)
{
  console.log(event);
 this.textentered=(<HTMLInputElement>event.target).value;
}
}
