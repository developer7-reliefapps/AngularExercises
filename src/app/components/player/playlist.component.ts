import { Component, Input } from '@angular/core';


@Component({
  selector: 'playlist',
  templateUrl: 'playlist.component.html',
  styleUrls: ['../../youtube-player/youtube-player.component.css']
})

export class PlaylistComponent {

  /*Variable declarations*/
  @Input() videoUrl: string;
  public playList: string[];
  public message: string;
  public linkFromList: string;

  /*Constructor*/
    constructor(
    ) {
      this.playList = [];
    }

    /*Methods*/

    /**Add to playlist**/
    public addToList(): void{
        if(!this.playList.includes(this.videoUrl)){
          this.playList.push(this.videoUrl);
        } else {
          this.message = "This video address is already in the list !";
        }
    }

    /**Transfer playlist element to input**/
    public playlistToInput(link: string){
      this.linkFromList = link;
    }
 }
