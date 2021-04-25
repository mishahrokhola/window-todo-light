import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo.interfaces';

@Component({
	selector: 'todo-list-item',
	templateUrl: './todo-list-item.component.html',
	styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
	@Input() public todo!: TodoItem;

	constructor() {}

	public ngOnInit(): void {}
}
