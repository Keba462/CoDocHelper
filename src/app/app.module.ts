import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UploadComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
