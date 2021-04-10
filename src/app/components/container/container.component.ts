import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EventsEmittersService } from 'src/app/services/events-emitters.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  name = 'Set iframe source';
  url: string = 'https://angular.io/api/router/RouterLink';
  urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer, private eventsEmittersService: EventsEmittersService) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.eventsEmittersService.url.subscribe((data:string) => {
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(data);
    });

  }
}
