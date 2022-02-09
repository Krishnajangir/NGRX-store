import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { GalleryService } from 'src/app/gallery/gallery.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class GalleryEffect {
  constructor(
    private actions$: Actions,
    private galleryService: GalleryService
  ) {}

  loadgallery$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Gallery API] Invoke API'),
      mergeMap(() =>
        this.galleryService
          .loadGallery()
          .pipe(map((data) => ({ type: '[Gallery API] Gallery API Success', allGallery: data })))
      )
    )
  );
}
