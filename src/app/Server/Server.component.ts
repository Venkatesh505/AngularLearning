import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:"Server.component.html",
    styles:[`.online{
color:white;
    }`
    ]
})
export class ServerComponent{
serverID:number=10;
serverName:string='Media Server';
serverStatus1=Math.random()>0.5?'online':'offline';
serverstatus(){
 
return this.serverStatus1;
}
backgroundcolor(){
    return this.serverStatus1==='online'?'green':'red';
}
}
