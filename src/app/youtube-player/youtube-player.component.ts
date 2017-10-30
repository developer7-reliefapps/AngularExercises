import { Component } from '@angular/core';
import { SearchBarComponent } from '../components/player/search-bar.component';
import { PlaylistComponent } from '../components/player/playlist.component';
import { ViewAreaComponent } from '../components/player/view-area.component';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent {

/*Constructor*/
  constructor() {}

  showLocalVar(localVar) {
    console.log(localVar);
  }
}
