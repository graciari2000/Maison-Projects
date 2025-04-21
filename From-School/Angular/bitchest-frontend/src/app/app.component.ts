import { Component } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component'; // Import the dropdown component
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is a standalone component if needed
  imports: [RouterOutlet, DropdownComponent], // Add DropdownComponent here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bitchest-frontend';

  logout() {
    console.log('User logged out');
    // Add logout logic, e.g., clear localStorage and redirect
  }
}
