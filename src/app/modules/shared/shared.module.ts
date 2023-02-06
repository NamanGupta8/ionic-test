import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from 'src/app/component/pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PickupCallPage } from 'src/app/pages/pickup-call/pickup-call.page';

@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [PickupCallCardComponent],
})
export class SharedModule {}
