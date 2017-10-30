import { Component, Input } from '@angular/core';

@Component({
    selector: 'view-area',
    templateUrl: 'view-area.component.html',
    styleUrls: ['../../youtube-player/youtube-player.component.css']
})

export class ViewAreaComponent {

  @Input() videoUrl: string;
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
      console.log(this.count + ' VIDEO ADDRESS : https://www.youtube.com/embed/' + videoUrl.slice(32, videoUrl.length));
      console.log('PART EXTRACTED : '+ videoUrl.slice(32, videoUrl.length));
      return 'https://www.youtube.com/embed/' + videoUrl.slice(32, videoUrl.length);
    }

 }
