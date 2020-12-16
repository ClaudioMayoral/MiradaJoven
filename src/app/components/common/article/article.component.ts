import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from "ngx-audio-player";

export interface PathRoute{
  title:string;
  route:string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() bg_color:string;
  @Input() content:any;
  @Input() path_routes:PathRoute[];
  @Input() current_route:string;
  @Input() track: Track[];
  current:string;

  constructor(public router: Router) { }

  currentTrack: Track = null;
  currentTime: any;
  appendTracksToPlaylistDisable = false;

  msaapPageSizeOptions = [5,10,15];

  // Material Style Advance Audio Player Playlist
  msaapTableHeader: string = 'My Playlist';
  msaapColumnHeader: string = 'My Music';

    onEnded(event) {
    console.log(event);
    this.currentTrack = null;
  }

  ngOnInit(): void {
    this.current = window.location.href;
    const info = document.getElementById("article-content");
    info.innerHTML = this.content.content;
  }

}
