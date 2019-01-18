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
serverstatus=false;
newserverstatus="No Server Created";
servers=["Server1","Server2"];
textentered='';
  constructor() {
    // setTimeout(() => {this.addNewServer=true;},2000)
   }

  ngOnInit() {
  }
onServerCreate() 
{
  this.serverstatus=true;
  this.servers.push(this.textentered);
this.newserverstatus="New Server Created is " + this.textentered;
this.textentered='';
}
enterservername(event: Event)
{
 // console.log(event);
// this.textentered=(<HTMLInputElement>event.target).value;

}
}
