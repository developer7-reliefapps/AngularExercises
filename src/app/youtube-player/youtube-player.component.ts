import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

/*Variable declarations*/
private dangerousVideoUrl: string;
private videoUrl: string;
public videourl: string;
public playList: string[];

/*Constructor*/
  constructor(
  ) {
    this.playList = [];
  }

/*Implementation of OnInit*/
  ngOnInit() {

  }

  /*Methods*/

  /**Add to playlist**/
  addToList(url: string){
    if(url){
      this.playList.push(url);
    }
  }

  /**Transfer playlist element to input**/
  playlistToInput(link: string){
    this.videoUrl = link;
  }
}
