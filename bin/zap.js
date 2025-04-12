const path = require('path');
const init = require('../core/init');
const install = require('../core/install');
const remove = require('../core/remove');
const list = require('../core/list');

const args = process.argv.slice(2);
const [command, ...params] = args;

switch (command) {
    case 'init':
        init();
        break;
    case 'install':
        install(params);
        break;
    case 'remove':
        remove(params);
        break;
    case 'list':
        list();
        break;
    default:
        console.log('Unknown command: ${command}');
        console.log('Available commands: init, install, remove, list');
}
