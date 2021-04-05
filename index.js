const {app, BrowserWindow} = require('electron')

let mainWindow

// 创建主窗口，设置了宽高等信息
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            // node集成，即是否注入node能力
            nodeIntegration: true
        }
    })

    // 加载主页面内容 index.html
    // mainWindow.loadFile('index.html')
    mainWindow.loadURL('https://bitclout.com')

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)