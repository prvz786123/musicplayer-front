import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

    @Input() albums=[{}];
    @Input() nowPlayingComp;

    nowPlaying=null;
    imgUrl="../../../assets/UI Materials/List-Play.svg"


  constructor() { }

  ngOnInit() {
      this.nowPlaying=null;
      this.imgUrl="../../../assets/UI Materials/List-Play.svg"
  }

  playPause(index=null){
      console.log(index,this.nowPlaying)
      if(index===this.nowPlaying){
            this.nowPlaying=null;
            this.nowPlayingComp.playing=false;

      }else{
          this.nowPlayingComp.selectedSong(this.albums[0]['track_list'][index],index)
          this.nowPlaying=index;
          this.nowPlayingComp.playing=true;
          this.nowPlayingComp.showNowPlaying=true;

          
      }

  }

}
