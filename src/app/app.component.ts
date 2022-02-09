import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { albumCollectionByAlbumId, uniqueAlbumIds } from 'src/store/app.selector';
import { retrievedGalleryList } from 'src/store/user-list.action';
import { GalleryModel } from './gallery/gallery.model';
import { GalleryService } from './gallery/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  );
  constructor(
    private store: Store<{ gallery: GalleryModel[] }>,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.galleryService.loadGallery().subscribe((gallery) => {
      console.log(gallery);
      this.store.dispatch(
        retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
      );
    });
  }
  albumChange(event:number) {
    this.allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }
}
