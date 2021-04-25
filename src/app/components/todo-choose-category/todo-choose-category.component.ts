import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TodoCategory } from '../../interfaces/todo-category.interfaces';
import { TodoCategoryService } from '../../services/todo-category/todo-category.service';

@Component({
	selector: 'todo-choose-category',
	templateUrl: './todo-choose-category.component.html',
	styleUrls: ['./todo-choose-category.component.scss'],
})
export class TodoChooseCategoryComponent implements OnInit {
	public categories: TodoCategory[] = [];
	public category = new FormControl(null);

	public isLoading = true;

	constructor(todoCategoryService: TodoCategoryService) {
		todoCategoryService.categories$.subscribe((categories) => {
			this.categories = categories;
			this.isLoading = false;
		});
	}

	public ngOnInit(): void {}
}
