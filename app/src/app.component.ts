import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'jc-app',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent {
  constructor() {
    inject(ViewportScroller).setOffset(() => [
      0,
      (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 84) + 12
    ]);
  }
}
