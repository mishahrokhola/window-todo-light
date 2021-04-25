import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddCategoryComponent } from './todo-add-category.component';

describe('TodoAddCategoryComponent', () => {
  let component: TodoAddCategoryComponent;
  let fixture: ComponentFixture<TodoAddCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
