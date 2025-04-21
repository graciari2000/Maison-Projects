import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for *ngIf and *ngFor
import { FormsModule } from '@angular/forms'; // Import for [(ngModel)]

@Component({
  selector: 'app-dropdown',
  standalone: true, // Ensure it's standalone
  imports: [CommonModule, FormsModule], // Add necessary Angular modules
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  items: string[] = ['TND', 'BTC', 'ETH', 'DOG', 'SOL'];
  selectedItem: string = '';
  isDropdownOpen: boolean = false;

  toggleDropdown(state: boolean) {
    setTimeout(() => {
      this.isDropdownOpen = state;
    }, 100); // Delay to prevent instant closing when clicking an option
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }
}
