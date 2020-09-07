import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class ContactComponent implements OnInit {

  version: string | null = environment.version;

  constructor() { }

  ngOnInit() { }

}