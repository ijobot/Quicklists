import { Component, input, output } from '@angular/core';
import {
  ChecklistItem,
  RemoveChecklistItem,
} from '../../shared/interfaces/checklist-item';

@Component({
  selector: 'app-checklist-item-list',
  template: `
    <section>
      <ul>
        @for (item of checklistItems(); track item.id){
        <li>
          <div>
            @if (item.checked){
            <span>✅</span>
            }
            {{ item.title }}
          </div>
          <div>
            <button (click)="toggle.emit(item.id)">Toggle</button>
          </div>
        </li>
        } @empty {
        <div>
          <h2>Add an item</h2>
          <p>Click the add button to add your first item to this quicklist</p>
        </div>
        }
      </ul>
    </section>
  `,
})
export class ChecklistItemListComponent {
  checklistItems = input.required<ChecklistItem[]>();
  toggle = output<RemoveChecklistItem>();
}
