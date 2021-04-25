import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ElectronStorageClass } from '../../classes/electron-storage.class';
import { ElectronService } from '../electron/electron.service';

@Injectable({
	providedIn: 'root',
})
export class UniqueIdService extends ElectronStorageClass<number> {
	protected readonly EMPTY_STATE = 0;
	public readonly FILE_NAME = 'unique-number';

	protected data$: BehaviorSubject<number> = new BehaviorSubject<number>(this.EMPTY_STATE);

	constructor(electronService: ElectronService) {
		super(electronService);

		this.loadData();
	}

	public uniqueId(): number;
	public uniqueId(prefix: string): string;

	public uniqueId(prefix?: string): string | number {
		const id = this.data$.getValue() + 1;
		this.data$.next(id);

		if (!prefix) {
			return id;
		}

		return prefix + id;
	}
}
