import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-user',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class NewUser implements OnInit {

  version: string | null = environment.version;

  constructor() { }

  ngOnInit() { 
    console.log('tela de cadastro');
  }

}
