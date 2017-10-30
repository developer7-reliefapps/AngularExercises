import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['../../youtube-player/youtube-player.component.css']
})

export class SearchBarComponent {

  /*Variable declarations*/
  @Input() message: string;
  @Input() linkFromList: string;

  /*Transfer the videoUrl property from SearchBar to ViewArea*/
  public videoUrl: string;

  /*Constructor*/
    constructor() {
      this.videoUrl = '';
    }

    ngOnChanges(){
      this.setVideoUrl();
    }

    /*Methods*/

    /**Clear message when the input box in clicked on**/
    public clearMessageAndInput(): void {
      this.message = '';
      this.videoUrl = '';
    }

    /***/
    public setVideoUrl(){
      if(!this.linkFromList){
        this.videoUrl = '';
        console.log("Je suis passé dans le if : " + this.linkFromList );
      } else {
        this.videoUrl = this.linkFromList;
        console.log("Je suis dans le else : "+ this.linkFromList);
      }
    }
}
