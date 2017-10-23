import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

private dangerousVideoUrl: string;
private videoUrl: any;

  constructor(

  ) { }

  ngOnInit() {
  }

}
