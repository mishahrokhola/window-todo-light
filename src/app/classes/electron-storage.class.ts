import { BehaviorSubject } from 'rxjs';

import { ElectronService } from '../services/electron/electron.service';

import { ElectronNotAvailableError } from '../errors/electron-not-available.error';

export abstract class ElectronStorageClass<D> {
	protected abstract readonly EMPTY_STATE: D;
	public abstract readonly FILE_NAME: string;

	protected abstract data$: BehaviorSubject<D>;

	protected constructor(protected electronService: ElectronService) {}

	protected async loadData(): Promise<void> {
		try {
			const data = await this.electronService.loadData<D>(this.FILE_NAME);

			if (data) {
				this.data$.next(data);
			}
		} catch (e) {
			if (e instanceof ElectronNotAvailableError) {
				return;
			}

			throw e;
		}
	}

	protected async saveData(updatedData: D): Promise<void> {
		try {
			await this.electronService.saveData(this.FILE_NAME, updatedData);
		} catch (e) {
			if (e instanceof ElectronNotAvailableError) {
				return;
			}

			throw e;
		}
	}
}
