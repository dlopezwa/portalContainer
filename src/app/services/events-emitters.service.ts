import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsEmittersService {
  url = new EventEmitter<string>();

  constructor() { }
}
