import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { MusicVideoModel } from './musicVideo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public songsCollection: MusicVideoModel[] = [];
  public currentVideo: MusicVideoModel;
  public currentIndex: number = 1;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.getSongs();
  }

  // get all the songs from firebase
  private getSongs() {
    this.firebase.getSongsCollection().subscribe((response: MusicVideoModel[]) => {
        this.songsCollection = response;
        this.currentVideo = this.songsCollection[0];
    });
  }

  // change currently showed music video
  private selectVideo(musicVideo: MusicVideoModel, index) {
    this.currentVideo = musicVideo;
    this.currentIndex = index + 1;
  }

  changeSlide(n: number){
    let songIndex;
    // get the index of the current video in the songsCollection array
    this.songsCollection.map((clip, i) => {
      if (this.currentVideo.source === clip.source) songIndex = i;
    });
    // if the index is 0 and the "prev" button clicked
    // return to the last clip
    if (songIndex === 0 && n === -1) {
      this.currentVideo = this.songsCollection[this.songsCollection.length -1];
      return;
    }
    // if the current clip is the last in the array and the "next"
    // clicked return to the first clip
    if (songIndex === this.songsCollection.length -1 && n === 1) {
      this.currentVideo = this.songsCollection[0];
      return;
    }

    // otherwise just change the index
    this.currentVideo = this.songsCollection[songIndex + n];
  }
}
