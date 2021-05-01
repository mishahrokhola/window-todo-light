import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { icons } from './modules/remix-icon.module';
import { RemixIconModule } from 'angular-remix-icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

import { TodoDatePickerComponent } from './components/todo-date-picker/todo-date-picker.component';
import { TodoAddCategoryComponent } from './components/todo-add-category/todo-add-category.component';
import { TodoChooseCategoryComponent } from './components/todo-choose-category/todo-choose-category.component';

@NgModule({
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,

		ReactiveFormsModule,
		BrowserAnimationsModule,

		MatInputModule,
		MatRadioModule,
		MatDialogModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatNativeDateModule,

		RemixIconModule.configure(icons),
	],
	declarations: [
		AppComponent,
		TodoListComponent,
		TodoListItemComponent,
		TodoAddComponent,
		TodoAddCategoryComponent,

		TodoDatePickerComponent,

		TodoChooseCategoryComponent,
	],
	providers: [],
})
export class AppModule {}
