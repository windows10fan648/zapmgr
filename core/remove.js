const fs = require('fs');
const path = require('path');

function remove(packages) {
    const zapModulesPath = path.join(process.cwd(), 'zap_modules');
    const zapJsonPath = path.join(process.cwd(), 'zap.json');

    if (!fs.existsSync(zapJsonPath)) {
        console.error('zap.json not found.');
        return;
    }

    const zapJson = JSON.parse(fs.readFileSync(zapJsonPath));

    packages.forEach(pkg => {
        const pkgPath = path.join(zapModulesPath, pkg);
        if (fs.existsSync(pkgPath)) {
            fs.rmSync(pkgPath, { recursive: true, force: true});
            delete zapJson.dependencies[pkg]; // Remove from zap.json dependencies
            console.log(`Removed ${pkg}`);
        } else {
            console.log(`${pkg} is not installed.`);
        }
    });

    fs.writeFileSync(zapJsonPath, JSON.stringify(zapJson, null, 2));
}

module.exports = remove;
