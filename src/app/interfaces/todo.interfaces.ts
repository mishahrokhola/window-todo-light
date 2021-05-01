export interface TodoItem {
	id: number;
	label: string;
	date: string;
	description?: string;
	categoryId: number;
	isFinished: boolean;
	files: [];
}

export interface TodoItemDialogData {
	date: string;
	categoryId: number;
}

export interface TodoItemAddEvent {
	item: TodoItem;
}
