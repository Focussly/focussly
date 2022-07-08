/**
 * IPC Events
 * 
 * Documentation:
 * https://www.electronjs.org/fr/docs/latest/api/ipc-main
 * https://www.electronjs.org/fr/docs/latest/api/ipc-renderer
 */
process.communication.invoke('send-message', 'ping').then(response => {
    console.log(response); // response 'pong'
}).catch(error => {
    console.error(error);
});

try {
    const response = process.communication.sendSync('send-sync-message', 'sync ping');
    console.log(response); // response 'sync pong'
} catch (error) {
    console.error(error);
}
