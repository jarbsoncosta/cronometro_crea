import {app, BrowserWindow} from 'electron'
import isDev from "electron-is-dev"
import path from 'path';


function createWindow(){
    const win = new BrowserWindow({width:800, height:600});
    win.loadURL(isDev ? "http://localhost:3000/" : `file://${path.join(__dirname, "../build/index.html")}`)
}

app.whenReady().then(()=>{
    createWindow()
})
app.on("active", ()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
})