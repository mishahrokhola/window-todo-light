import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChooseCategoryComponent } from './todo-choose-category.component';

describe('TodoChooseCategoryComponent', () => {
  let component: TodoChooseCategoryComponent;
  let fixture: ComponentFixture<TodoChooseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoChooseCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoChooseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
