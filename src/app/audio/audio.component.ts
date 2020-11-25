import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  audioObject = new Audio();
  url: string = '../../assets/music/Darina.mp3'
  playOrStop: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.getFile()
    this.audioObject.play()
  }

  playAudio() {
    /*this.getFile()*/
    this.audioObject.play()
    this.playOrStop = true;

    /*this.audioObject.src = this.url;
    this.audioObject.load();
    this.getFile()
    this.audioObject.play()
    this.audioObject.volume = 0.04;
    this.playOrStop = true;*/
  }

  stopAudio() {
    this.audioObject.pause()
   // this.audioObject.currentTime = 0;
    this.playOrStop = false;
    /*
    this.audioObject.src = this.url;
    this.audioObject.load();
    this.audioObject.pause()
    this.audioObject.currentTime = 0;
    this.playOrStop = false;*/
  }

  getFile() {
    this.audioObject.src = this.url;
    this.audioObject.load();
    this.audioObject.volume = 0.04;
  }

}


