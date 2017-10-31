import { Component, Input } from '@angular/core';

import { YoutubeVideo } from '../../../pages/youtube-player/YoutubeVideo';

@Component ({
  selector: 'playlist',
  templateUrl: 'playlist.component.html',
  styleUrls: ['../../../pages/youtube-player/youtube-player.component.css']
})

export class PlaylistComponent {

  /*Variable declarations*/
  @Input() youtubeVideo: YoutubeVideo;

  /*Constructor*/
    constructor() {}

  /*Methods*/

  /**Add to playlist**/
  public addToList(): void {
      if(!this.youtubeVideo.playList.includes(this.youtubeVideo.videoUrl)){
        this.youtubeVideo.playList.push(this.youtubeVideo.videoUrl);
      } else {
        this.youtubeVideo.message = "This video address is already in the list !";
      }
  }

  /**Transfer playlist element to input**/
  public playlistToInput(link: string) {
    this.youtubeVideo.videoUrl = link;
  }
}
