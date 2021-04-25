import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';

import { ElectronNotAvailableError } from '../../errors/electron-not-available.error';

@Injectable({
	providedIn: 'root',
})
export class ElectronService {
	private readonly ipcRenderer?: typeof ipcRenderer;

	constructor() {
		// Only available if running in electron
		if (this.isElectron()) {
			this.ipcRenderer = window.require('electron').ipcRenderer;
		}
	}

	private isElectron(): boolean {
		return !!(window && window.process && window.process.type);
	}

	public loadData<T>(jsonFileName: string): Promise<T> | never {
		if (this.ipcRenderer) {
			return this.ipcRenderer.invoke('loadData', jsonFileName);
		}

		throw new ElectronNotAvailableError();
	}

	public saveData<T>(jsonFileName: string, data: T): Promise<void> | never {
		if (this.ipcRenderer) {
			return this.ipcRenderer.invoke('saveData', jsonFileName, data);
		}

		throw new ElectronNotAvailableError();
	}
}
