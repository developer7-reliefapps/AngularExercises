import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

/*Variable declarations*/
private videoUrl: string;
public playList: string[];
public message: string;

/*Constructor*/
  constructor(
  ) {
    this.playList = [];
    this.videoUrl = '';
  }

/*Implementation of OnInit*/
  ngOnInit() {

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
    this.videoUrl = link;
  }

  /**Extract key id from YouTube links, from position 32**/
  /**and aggregate constant part for integration to HTML**/
  public slashVideoUrl(videoUrl: string): string{
    return 'https://www.youtube.com/embed/' + videoUrl.slice(32);
  }

  /**Clear message when the input box in clicked on**/
  public clearMessage(): void {
    this.message = '';
  }

  /**Clear input box content**/
  public clearInput(): void {
    this.videoUrl = ' ';
  }
}
