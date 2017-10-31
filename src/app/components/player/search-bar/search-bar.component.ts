import { Component, Input, OnInit } from '@angular/core';

import { YoutubeVideo } from '../../../pages/youtube-player/YoutubeVideo';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['../../../pages/youtube-player/youtube-player.component.css']
})

export class SearchBarComponent {

  /*Variable declarations*/
  public youtubeVideo: YoutubeVideo;

  /*Constructor*/
  constructor() {
    this.youtubeVideo = {
      videoUrl: '',
      message: '',
      playList: []
    }
  }

  /*Methods*/

  /**Clear message when the input box in clicked on**/
  public clearMessageAndInput(): void {
    this.youtubeVideo.message = '';
    this.youtubeVideo.videoUrl = '';
  }

  /**Test to illustrate the passing of the same object youtubeVideo**/
  public changeAthing(message) {
    message = "J'ai changé";
    this.youtubeVideo.message = message;
  }
}
