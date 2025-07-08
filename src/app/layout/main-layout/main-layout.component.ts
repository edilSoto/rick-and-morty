import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './main-layout.component.html'
})
export default class MainLayoutComponent {

}
