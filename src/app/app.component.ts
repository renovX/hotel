import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'demoapp';
  role = 'user';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('head1', { static: true }) hd!: ElementRef;
  ngAfterViewInit(): void {
    const comp = this.vcr.createComponent(RoomsComponent);
  }
  ngOnInit(): void {
    this.hd.nativeElement.innerText = 'Welcome';
  }
}
