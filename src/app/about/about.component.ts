import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import {MatTableDataSource} from '@angular/material/table';

export interface ContentInformation {
  description: string;
  link: string;
  title: string;


}

const ELEMENT_DATA: ContentInformation[] = [
  {title: 'Como vender pela internet na crise do coronavírus', description: 'Você conhecerá técnicas para melhorar sua performance nas redes sociais e aumentar o tráfego de clientes nos seus canais de vendas.', link: 'https://m.sebrae.com.br/sites/PortalSebrae/cursosonline/como-vender-pela-internet-na-crise-do-coronavirus,344dd9b9ff251710VgnVCM1000004c00210aRCRD' }

];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'link' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  version: string | null = environment.version;

  constructor() { }

  ngOnInit() { }

}
