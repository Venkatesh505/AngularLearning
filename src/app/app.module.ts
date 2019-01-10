import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppComponent }     from './app.component';
import { ServerComponent }  from './Server/Server.component';
import { ServersComponent } from './servers/servers.component';
import { warningcomponent } from './Warning/warning.component';
import { cautioncomponent } from './Caution/caution.component';
import { FormsModule }      from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    warningcomponent,
    cautioncomponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
