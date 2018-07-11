import { Component, Input } from '@angular/core';
import { MusicVideoModel } from '../musicVideo.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent {
  @Input() musicVideo: MusicVideoModel;


  constructor(public sanitizer: DomSanitizer) { }

}
