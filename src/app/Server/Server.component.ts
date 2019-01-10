import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:"Server.component.html"
})
export class ServerComponent{
serverID:number=10;
serverName:string='Media Server';
serverStatus:string='Offline';
serverstatus(){
return this.serverStatus;
}
}
