const {app, BrowserWindow} = require('electron')
const isDev = require ("electron-is-dev")
const path = require ("path")


function createWindow(){
    const win = new BrowserWindow({
     width: 1440,
     height: 900,
     fullscreen: true, // Define a janela para abrir em modo tela cheia
     autoHideMenuBar: true, // Exibe a barra de menu
     webPreferences:{
        preload:path.join(__dirname, "preloader.js")
     },
     focusable: true // Tornar a janela focável desde o início  
    });
    win.loadURL(isDev ? "http://localhost:3000/" : `file://${path.join(__dirname, "../build/index.html")}`)
}

app.whenReady().then(()=>{
    createWindow()
})
app.on("active", ()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
})