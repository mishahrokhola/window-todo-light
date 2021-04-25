import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TodoCategory } from '../../interfaces/todo-category.interfaces';
import { ElectronStorageClass } from '../../classes/electron-storage.class';

import { todoCategoryConfig } from '../../config/todo-category.config';
import { ElectronService } from '../electron/electron.service';

@Injectable({
	providedIn: 'root',
})
export class TodoCategoryService extends ElectronStorageClass<TodoCategory[]> {
	protected readonly EMPTY_STATE: TodoCategory[] = todoCategoryConfig;
	public readonly FILE_NAME = 'todo-categories';

	protected data$: BehaviorSubject<TodoCategory[]> = new BehaviorSubject(this.EMPTY_STATE);
	public categories$: Observable<TodoCategory[]> = this.data$.asObservable();

	constructor(electronService: ElectronService) {
		super(electronService);

		this.loadData();
	}

	public async addCategory(category: TodoCategory): Promise<void> {
		const categories = this.data$.getValue();
		const newCategories = [...categories, category];

		this.data$.next(newCategories);

		return this.saveData(newCategories);
	}
}
