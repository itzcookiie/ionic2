import {Injectable} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

}
