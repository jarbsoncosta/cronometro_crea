const {app, BrowserWindow} = require('electron')
const isDev = require ("electron-is-dev")
const path = require ("path")


function createWindow(){
    const win = new BrowserWindow({width:1280,
     height:1024,
     webPreferences:{
        preload:path.join(__dirname, "preloader.js")
     }    
    });
    win.loadURL(isDev ? "http://localhost:3000/" : `file://${path.join(__dirname, "../build/index.html")}`)
}

app.whenReady().then(()=>{
    createWindow()
})
app.on("active", ()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
})