import { Component, Input } from '@angular/core';

import { YoutubeVideo } from '../../../pages/youtube-player/YoutubeVideo';

@Component({
    selector: 'view-area',
    templateUrl: 'view-area.component.html',
    styleUrls: ['../../../pages/youtube-player/youtube-player.component.css']
})

export class ViewAreaComponent {

  @Input() youtubeVideo: YoutubeVideo;
  /**Counters to distinguish the calls of the slashVideo method**/
  public count: number;

    constructor(
    ) {
      this.count = 0;
    }

    /*Methods*/

    /**Extract key id from YouTube links, from position 32**/
    /**and aggregate constant part for integration to HTML**/
    public slashVideoUrl(videoUrl: string): string{
      this.count ++;
      return 'https://www.youtube.com/embed/' + videoUrl.slice(32, videoUrl.length);
    }

 }
