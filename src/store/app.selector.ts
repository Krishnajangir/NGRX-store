import { createSelector } from '@ngrx/store';
import { GalleryModel } from 'src/app/gallery/gallery.model';

import { AppState } from './app.state';

export const gallerySelector =(state: AppState) => state.gallery;

export const uniqueAlbumIds = createSelector(
  gallerySelector,
  (gallery: GalleryModel[]) => {
    return [...new Set(gallery.map((_) => _.albumId))];
  }
);

export const albumCollectionByAlbumId = (albumId:number) => createSelector(
    gallerySelector,
    (gallery:GalleryModel[]) => {
        if(albumId == -1){
            return gallery;
        }
        return gallery.filter(_ => _.albumId == albumId);
    }
)
