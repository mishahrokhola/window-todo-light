import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo.interfaces';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
	@Input() public todos: TodoItem[] = [];

	constructor() {}

	public ngOnInit(): void {}
}
