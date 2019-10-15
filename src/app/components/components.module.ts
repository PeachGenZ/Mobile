import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './time-ago.pipe';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [ItemComponent, ItemsComponent,TimeAgoPipe],
  imports: [
    CommonModule
  ],
  exports: [ItemsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
