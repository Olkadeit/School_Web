import { NgModule } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFound } from './not.found.component' ;
import { ClientComponent } from './client.component';

//import { FormsModule } from '@angular/forms' ;
const appRoute: Routes =[

    { path:'home', component:HomeComponent},
    { path:'contact', component:ContactComponent},
    { path:'client', component:ClientComponent },
     { path:'**', component:PageNotFound},
    { path: '',  redirectTo: '/home', pathMatch: 'full' }
   
] 
@NgModule({
   imports: [BrowserModule,ReactiveFormsModule,RouterModule.forRoot(appRoute)], 
   declarations: [AppComponent,HomeComponent,ContactComponent,ClientComponent,PageNotFound],
   bootstrap: [AppComponent] 
})
export class AppModule {
  
 }


