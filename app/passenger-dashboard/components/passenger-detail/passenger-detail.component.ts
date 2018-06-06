import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core'
import {Passenger} from "../../models/passenger.interface";


@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="this.detail.checkedIn"
      ></span>

      <div *ngIf="editing">
        <input
          type="text"
          [value]="this.detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>

      <div *ngIf="!editing">
        {{this.detail.fullname}}
      </div>

      <div class="date">
        Check in date:
        {{this.detail.checkInDate ? (this.detail.checkInDate | date: 'yMMMMd') : 'Not checked in'}}
      </div>
      <div class="children">
        Children: {{this.detail.children?.length || 0}}
      </div>
      <button (click)="toogleEdit()">
        {{editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  delete: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;


  ngOnChanges(event) {
    if (event.detail) { //detail has been changed, this  should re-render
      this.detail = {...event.detail.currentValue}
    }
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }


  toogleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.delete.emit(this.detail);
  }

  constructor() {
  }
}
