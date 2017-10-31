import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/player/search-bar/search-bar.component';
import { PlaylistComponent } from '../../components/player/playlist/playlist.component';
import { ViewAreaComponent } from '../../components/player/view-area/view-area.component';

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
