import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  players = [
    {player: 'Messi' },
    {player: 'Mbappe'},
    {player: 'Modric'},
    {player: 'Mac Allister'}
  ]
}
