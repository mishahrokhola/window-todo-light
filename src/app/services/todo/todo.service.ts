import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TodoItem } from '../../interfaces/todo.interfaces';
import { ElectronService } from '../electron/electron.service';
import { ElectronStorageClass } from '../../classes/electron-storage.class';

@Injectable({
	providedIn: 'root',
})
export class TodoService extends ElectronStorageClass<TodoItem[]> {
	protected readonly EMPTY_STATE: TodoItem[] = [];
	public readonly FILE_NAME = 'todos';

	protected data$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(this.EMPTY_STATE);
	public todos$: Observable<TodoItem[]> = this.data$.asObservable();

	constructor(electronService: ElectronService) {
		super(electronService);

		this.loadData();
	}

	public async addTodo(newTodo: TodoItem): Promise<void> {
		const todos = this.data$.getValue();
		const newTodos = [...todos, newTodo];

		this.data$.next(newTodos);

		return this.saveData(newTodos);
	}
}
