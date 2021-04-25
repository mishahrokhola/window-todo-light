import { ExtendableError } from 'ts-error';

export class ElectronNotAvailableError extends ExtendableError {
	constructor() {
		super('Electron is not available');
	}
}
