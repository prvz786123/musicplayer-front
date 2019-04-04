import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  @Input() album=[{}];
  @Input() trackListComp;

  constructor() { }

  //To Hide Now Playing Component
  showNowPlaying=false;

  //Current Selected Track Details
  currentPlayingDetails={};

  //Current Playing Track Index
  currentPlayingIndex = 0;

  imgUrl;

  //Flag to track song status | Playing or Paused
  playing;




  ngOnInit() {
    this.playing=false;
    this.showNowPlaying=false;
    this.imgUrl="../../../assets/UI Materials/Pause.svg"
  }

  //Toggle Play Pause
  playPause(){
    this.playing=!this.playing;
    if(this.playing){
      this.trackListComp.nowPlaying=this.currentPlayingIndex;
    }else{
      this.trackListComp.nowPlaying=null;
    }
  }

  //To Get Track Selection from Track List
  selectedSong(track,index){
    this.currentPlayingDetails=track;
    this.currentPlayingIndex=index;
  }

  //To Hide Now Playing Comp | on click Of X;
  close(){
    this.playing=false;
    this.trackListComp.nowPlaying=null;
    this.showNowPlaying=false;
  }

}
