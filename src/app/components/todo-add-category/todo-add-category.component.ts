import { Component, OnInit } from '@angular/core';
import { TodoCategory } from '../../interfaces/todo-category.interfaces';
import { TodoCategoryService } from '../../services/todo-category/todo-category.service';

@Component({
	selector: 'todo-add-category',
	templateUrl: './todo-add-category.component.html',
	styleUrls: ['./todo-add-category.component.scss'],
})
export class TodoAddCategoryComponent implements OnInit {
	public categories: TodoCategory[] = [];
	public category: TodoCategory | null = null;

	constructor(todoCategoryService: TodoCategoryService) {
		todoCategoryService.categories$.subscribe((categories) => (this.categories = categories));
	}

	public ngOnInit(): void {}
}
