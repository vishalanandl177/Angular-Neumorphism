import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  modules = [
    'Badge module',
    'Button module',
    'Card module',
    'Checkbox module',
    'Divider module',
    'Input module',
    'Form-field module',
    'Progressbar module',
    'Radio-button module',
    'Tabs module',
    'Toolbar module',
  ];

  ngOnInit(): void {}

  shareFacebook(): void {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fangular-neomorphism.web.app%2F&amp;src=sdkpreparse',
      '_blank'
    );
  }

  shareTwitter(): void {
    window.open(
      'https://twitter.com/intent/tweet?text=https%3A%2F%2Fangular-neomorphism.web.app%2F&amp',
      '_blank'
    );
  }
}
