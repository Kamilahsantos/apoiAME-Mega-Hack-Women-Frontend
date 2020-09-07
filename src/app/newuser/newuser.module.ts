import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { NewUserRoutingModule } from './newuser-routing.module';
import { NewUser } from './newuser.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    NewUserRoutingModule
  ],
  declarations: [
    NewUser
  ]
})
export class AboutModule { }
