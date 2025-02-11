const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

// Agregar esto para desarrollo
try {
    require('electron-reloader')(module, {
        debug: true,
        watchRenderer: true
    });
} catch (_) { console.log('Error'); }

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    if (isDev) {
        // En desarrollo
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools();
        
        // Habilitar recarga en vivo
        mainWindow.webContents.on('did-fail-load', () => {
            console.log('Reintentando cargar la URL...');
            setTimeout(() => {
                mainWindow.loadURL('http://localhost:3000');
            }, 1000);
        });
    } else {
        // En producción
        mainWindow.loadFile(path.join(__dirname, 'out/index.html'));
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (mainWindow === null) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}); 