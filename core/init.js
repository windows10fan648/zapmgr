const fs = require('fs');
const path = require('path');

function init() {
    const zapJsonPath = path.join(process.cwd(), 'zap.json');

    if (fs.existsSync(zapJsonPath)) {
        console.log('zap.json already exists.');
        return;
    }

    const zapJson = {
        name: "zap-project",
        version: "1.0.0",
        dependencies: {}
    };

    fs.writeFileSync(zapJsonPath, JSON.stringify(zapJson, null, 2));
    console.log('Initialized zap.json!');
}

module.exports = init;
