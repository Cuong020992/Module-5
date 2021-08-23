import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtcileComponent } from './artcile/artcile.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtcileComponent,
    LikeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
