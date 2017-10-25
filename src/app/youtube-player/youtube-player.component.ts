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
  addToList(videoUrl: string){
    if(videoUrl){
      this.playList.push(videoUrl);
    }
  }
}
