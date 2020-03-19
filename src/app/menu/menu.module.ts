import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";

const components = [MenuItemComponent, MenuComponent];

@NgModule({
  declarations: [...components],
  imports: [RouterModule, CommonModule],
  exports: [...components]
})
export class MenuModule {}
