import { BrowserWindow, App, ipcMain } from 'electron';
import { DataManager } from './data-manager';

export class Main {
	public static application: App;
	public static dataManager: DataManager;
	public static mainWindow: BrowserWindow | null;
	public static BrowserWindow: typeof BrowserWindow;

	public static readonly config: Electron.BrowserWindowConstructorOptions = {
		width: 800,
		height: 600,
		// frame: false,
		// skipTaskbar: true,
		webPreferences: {
			nodeIntegration: true,
		},
	};

	private static handleWindowAllClosed(): void {
		if (process.platform !== 'darwin') {
			Main.application.quit();
		}
	}

	private static handleWindowClose(): void {
		// Dereference the window object.
		Main.mainWindow = null;
	}

	private static createWindow(): void {
		Main.mainWindow = new Main.BrowserWindow(Main.config);

		Main.mainWindow.loadURL('file://' + __dirname + `/recourses/index.html`);
		Main.mainWindow.on('closed', Main.handleWindowClose);

		Main.mainWindow.webContents.openDevTools();
		// Main.mainWindow.removeMenu();
	}

	public static main(app: Electron.App, browserWindow: typeof BrowserWindow): void {
		Main.BrowserWindow = browserWindow;
		Main.application = app;

		Main.application.on('window-all-closed', Main.handleWindowAllClosed);

		Main.application.on('ready', Main.createWindow);
		Main.application.on('activate', Main.createWindow);

		Main.dataManager = new DataManager(app);

		ipcMain.handle('loadData', Main.dataManager.loadData);
		ipcMain.handle('saveData', Main.dataManager.saveData);

		// Main.application.dock.hide();
	}
}
