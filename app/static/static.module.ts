import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from '@app/static/static-routing.module';
import { HomeComponent } from '@app/static/home/home.component';
import { AboutComponent } from '@app/static/about/about.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [HomeComponent, AboutComponent]
})
export class StaticModule {}
