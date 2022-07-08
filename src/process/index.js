// Electron modules
const { app } = require('electron');
const AppCore = require('@focussly/electron-layer/app');

// Renderers
const MainRenderer = require('./renderers/main');

// App class
class App extends AppCore {
  renderers = {
    main: new MainRenderer,
  }

  onAppReady() {
    this.renderers.main.mount();
  }

  onAppWindowAllClosed() {
    app.quit();
  }
}

new App();
