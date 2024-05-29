import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Teste1Component } from '../components/teste1/teste1.component';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Teste2Component } from '../components/teste2/teste2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page, Teste1Component, Teste2Component]
})
export class Tab1PageModule {}
