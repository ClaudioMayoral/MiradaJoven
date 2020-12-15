import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss']
})
export class TraductorComponent implements OnInit {

  lang;

  constructor() { }

  ngOnInit(): void {
      this.lang = localStorage.getItem("lang") ||"esp";
  }

  changeLang(lang){
    localStorage.setItem("lang", lang);
    window.location.reload();
  }

}
