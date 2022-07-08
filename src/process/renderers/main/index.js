const path = require('path');
const url = require('url');
const RendererCore = require('@focussly/electron-layer/renderer');
const { appPath, preloadPath } = require('@focussly/electron-layer/helpers/path');

/**
 * MainRenderer
 */
class MainRenderer extends RendererCore {
  windowConfig = {
    width: 1440,
    height: 1024,
    x: 0,
    y: 0,
    show: true,
    fullscreen: false,
    backgroundColor: '#FFFFFF',
    webPreferences: {
      webSecurity: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: preloadPath,
    },
  };

  /**
   * Constructor
   *
   * @param {AppCore} appCore 
   */
  constructor(appCore) {
    super(appCore);

    this.windowLoadFile = url.pathToFileURL(path.resolve(appPath, 'views/main/index.html')).pathname;
  }

  onWindowReadyToShow() {
    this.window.toggleDevTools();
  }

  onWindowClose() {
    this.unMountWindowEvents();
    this.unMountIPCEvents();
  }

  /**
   * IPC Events from this renderer
   */
  handleIPCSendMessage(event, arg) {
    console.log(arg) // echo "ping"
    return 'pong';
  }

  onIPCSendSyncMessage(event, arg) {
    console.log(arg) // echo "sync ping"
    event.returnValue = 'sync pong';
  }
}

module.exports = MainRenderer;
