


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: AppComponent
    //   },
    
   
    //])
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
