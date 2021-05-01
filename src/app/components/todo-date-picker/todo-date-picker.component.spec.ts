import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDatePickerComponent } from './todo-date-picker.component';

describe('TodoDatePickerComponent', () => {
	let component: TodoDatePickerComponent;
	let fixture: ComponentFixture<TodoDatePickerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TodoDatePickerComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TodoDatePickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
