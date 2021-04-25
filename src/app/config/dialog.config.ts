import { MatDialogConfig } from '@angular/material/dialog';

export const baseConfig: MatDialogConfig = {
	autoFocus: false,
};

export const mediumConfig: MatDialogConfig = {
	...baseConfig,
	width: '500px',
	maxHeight: '80vh',
};
