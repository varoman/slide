import { Component, Input } from '@angular/core';
import { MusicVideoModel } from '../musicVideo.model';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent  {

  @Input() musicVideo: MusicVideoModel;
  @Input() currentVideo: MusicVideoModel;

}
