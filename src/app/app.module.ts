import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GalleryEffect } from 'src/store/app.effect';
import { galleryReducer } from 'src/store/user-list- reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryService } from './gallery/gallery.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([GalleryEffect]),
    StoreModule.forRoot({ gallery: galleryReducer }),
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
