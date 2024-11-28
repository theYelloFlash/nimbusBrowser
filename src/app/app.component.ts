import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowsertabsComponent } from "./components/browsertabs/browsertabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrowsertabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mybrowser';
}
