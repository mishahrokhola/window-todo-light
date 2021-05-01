import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DateTime } from 'luxon';

import { TodoItem } from '../../interfaces/todo.interfaces';
import { ElectronService } from '../electron/electron.service';
import { ElectronStorageClass } from '../../classes/electron-storage.class';

@Injectable({
	providedIn: 'root',
})
export class TodoService extends ElectronStorageClass<Record<string, TodoItem[]>> {
	protected readonly EMPTY_STATE: Record<string, TodoItem[]> = {};
	public readonly FILE_NAME = 'todos';

	protected data$: BehaviorSubject<Record<string, TodoItem[]>> = new BehaviorSubject(this.EMPTY_STATE);
	public todos$: Observable<Record<string, TodoItem[]>> = this.data$.asObservable();

	constructor(electronService: ElectronService) {
		super(electronService);

		this.loadData();
	}

	public async addTodo(newTodo: TodoItem): Promise<void> {
		const date = DateTime.fromISO(newTodo.date).toISODate();

		const todos = this.data$.getValue();

		const currentDateTodos = todos[date] ?? [];
		const newCurrentTodos = [...currentDateTodos, newTodo];

		const newTodos = { ...todos, [date]: newCurrentTodos };

		this.data$.next(newTodos);
		return this.saveData(newTodos);
	}
}
