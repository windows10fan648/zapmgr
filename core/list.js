const fs = require('fs');
const path = require('path');

function list() {
    const zapJsonPath = path.join(process.cwd(), 'zap.json');

    if (!fs.existsSync(zapJsonPath)) {
        console.error('zap.json not found.');
        return;
    }

    const zapJson = JSON.parse(fs.readFileSync(zapJsonPath));
    const deps = zapJson.dependencies;

    console.log('Installed packages:');
    for (const pkg in deps) {
        console.log(`- ${pkg}@${deps[pkg]}`);
    }
}

module.exports = list;
