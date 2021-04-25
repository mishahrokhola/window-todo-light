import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateTime } from 'luxon';

import { TodoItem, TodoItemAddEvent, TodoItemDialogData } from '../../interfaces/todo.interfaces';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'todo-add',
	templateUrl: './todo-add.component.html',
	styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
	public todoForm = new FormGroup({
		label: new FormControl('New todo', Validators.required),
	});

	public get label(): AbstractControl | null {
		return this.todoForm.get('label');
	}

	constructor(
		@Inject(MAT_DIALOG_DATA) private data: TodoItemDialogData,
		private uniqueIdService: UniqueIdService,
		private dialogRef: MatDialogRef<TodoAddComponent>
	) {}

	public handleSubmit(): void {
		const data: TodoItemAddEvent = { item: this.getTodo() };

		this.dialogRef.close(data);
	}

	private getTodo(): TodoItem {
		return {
			id: this.uniqueIdService.uniqueId(),
			label: this.label?.value,
			date: DateTime.now().startOf('days').toString(),
			isFinished: false,
			categoryId: this.data.categoryId,
			files: [],
		};
	}
}
