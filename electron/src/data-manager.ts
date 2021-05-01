import { App, IpcMainInvokeEvent } from 'electron';

import * as fs from 'fs';
import * as path from 'path';

export class DataManager {
	constructor(private readonly application: App) {
		this.loadData = this.loadData.bind(this);
		this.saveData = this.saveData.bind(this);
	}

	public async loadData<T>(_event: IpcMainInvokeEvent, fileName: string): Promise<T | null> {
		const userDataPath = this.application.getPath('userData');
		const _path = path.join(userDataPath, `${fileName}.json`);

		try {
			const data = fs.readFileSync(_path, 'utf-8');

			return data.length > 0 ? JSON.parse(data) : null;
		} catch (e) {
			return null;
		}
	}

	public async saveData<T>(_event: IpcMainInvokeEvent, fileName: string, data: T): Promise<string> {
		const userDataPath = this.application.getPath('userData');
		const _path = path.join(userDataPath, `${fileName}.json`);

		fs.writeFileSync(_path, JSON.stringify(data), 'utf-8');

		return 'OK';
	}
}
