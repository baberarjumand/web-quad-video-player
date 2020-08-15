import {
  Component,
  ViewChild,
  Inject,
  OnInit,
  HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quad-video-player';
  documentElemRef;

  @ViewChild('vid1Input') vid1Input;
  @ViewChild('vid2Input') vid2Input;
  @ViewChild('vid3Input') vid3Input;
  @ViewChild('vid4Input') vid4Input;

  eeveeMistLink =
    'https://firebasestorage.googleapis.com/v0/b/quad-video-web-player.appspot.com/o/eevee_mist.mp4?alt=media&token=a4f3d504-93d0-43c7-980a-8061a8221290';
  deliDayInLifeLink =
    'https://firebasestorage.googleapis.com/v0/b/quad-video-web-player.appspot.com/o/the_deli_-_day_in_life.mp4?alt=media&token=1c075531-399d-43ee-9ccc-6ea45f1a147e';
  flavCallMeLink =
    'https://firebasestorage.googleapis.com/v0/b/quad-video-web-player.appspot.com/o/90s_flav_-_call_me.mp4?alt=media&token=41c830c3-a616-4185-ada6-e9788a60cf27';
  pixelArtRainGifsLink =
    'https://firebasestorage.googleapis.com/v0/b/quad-video-web-player.appspot.com/o/pixel_art_rain_gifs.mp4?alt=media&token=a5717946-eff0-4843-bdc7-ecefa5d47a9e';
  chillAudioLoop =
    'https://firebasestorage.googleapis.com/v0/b/quad-video-web-player.appspot.com/o/vid-chillLoopAudio.mp4?alt=media&token=d2602bd5-0ae5-4417-b5d2-423e9161f029';

  // constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {
    // this.documentElemRef = document.documentElement;
  }

  // @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
  //   event: KeyboardEvent
  // ) {
  //   console.log(event);
  //   this.documentElemRef.exitFullScreen();
  // }

  vid1InputChange() {
    // console.log($event);
    // const file = document.querySelector('#vid1File').files[0];
    const file = this.vid1Input.nativeElement.files[0];
    // console.log(file);

    const vid1Node: any = document.querySelector('#vid1ElRef');

    const fileUrl = URL.createObjectURL(file);
    vid1Node.src = fileUrl;
  }

  vid2InputChange() {
    const file = this.vid2Input.nativeElement.files[0];
    const vid2Node: any = document.querySelector('#vid2ElRef');
    const fileUrl = URL.createObjectURL(file);
    vid2Node.src = fileUrl;
  }

  vid3InputChange() {
    const file = this.vid3Input.nativeElement.files[0];
    const vid3Node: any = document.querySelector('#vid3ElRef');
    const fileUrl = URL.createObjectURL(file);
    vid3Node.src = fileUrl;
  }

  vid4InputChange() {
    const file = this.vid4Input.nativeElement.files[0];
    const vid4Node: any = document.querySelector('#vid4ElRef');
    const fileUrl = URL.createObjectURL(file);
    vid4Node.src = fileUrl;
  }

  vid1arrowUp() {
    console.log('Vid 1 Arrow Up');
  }

  vid1arrowDown() {
    console.log('Vid 1 Arrow Down');
  }

  vid1RightClick() {
    console.log('Vid 1 Right Click');
  }

  vid1DblClick() {
    console.log('Vid 1 Double Click');
  }
}
