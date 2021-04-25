export type TodoCategory = TodoCategoryIcon | TodoCategoryImg;

export interface TodoCategoryIcon {
	id: number;

	icon: string; // default is star

	title: string;
	color: string;
}

export interface TodoCategoryImg {
	id: number;

	img: string;

	title: string;
	color: string;
}
