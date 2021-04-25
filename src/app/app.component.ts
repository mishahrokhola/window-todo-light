import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TodoService } from './services/todo/todo.service';

import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoChooseCategoryComponent } from './components/todo-choose-category/todo-choose-category.component';

import { TodoItem, TodoItemAddEvent, TodoItemDialogData } from './interfaces/todo.interfaces';
import { mediumConfig } from './config/dialog.config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public todos: TodoItem[] = [];

	constructor(private todoService: TodoService, private dialog: MatDialog) {
		todoService.todos$.subscribe((list) => (this.todos = list));
	}

	public async addTodo(): Promise<void> {
		const categoryId: number | undefined = await this.openCategoryDialog();

		if (!categoryId) {
			return;
		}

		const todoAddEvent = await this.openTodoAddDialog(categoryId);

		if (todoAddEvent?.item) {
			return this.todoService.addTodo(todoAddEvent.item);
		}
	}

	private async openCategoryDialog(): Promise<number | undefined> {
		const chooseCategoryDialogRef = this.dialog.open(TodoChooseCategoryComponent, mediumConfig);

		return chooseCategoryDialogRef.afterClosed().toPromise();
	}

	private async openTodoAddDialog(categoryId: number): Promise<TodoItemAddEvent | undefined> {
		const todoAddDialogRef = this.dialog.open<TodoAddComponent, TodoItemDialogData, TodoItemAddEvent>(
			TodoAddComponent,
			{ ...mediumConfig, data: { categoryId } }
		);

		return todoAddDialogRef.afterClosed().toPromise();
	}
}
