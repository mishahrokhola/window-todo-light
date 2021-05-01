import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker/datepicker-input-base';
import { FormControl } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
	selector: 'todo-date-picker',
	templateUrl: './todo-date-picker.component.html',
	styleUrls: ['./todo-date-picker.component.scss'],
})
export class TodoDatePickerComponent {
	@Input() public date = DateTime.now().toISODate();
	@Output() public dateChange = new EventEmitter<string>();

	public dateControl = new FormControl(this.date);

	public handleDateChange(event: MatDatepickerInputEvent<unknown>): void {
		if (event.value instanceof Date) {
			this.dateChange.emit( DateTime.fromJSDate(event.value).toISODate());
		}
	}
}
