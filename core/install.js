const fs = require('fs');
const path = require('path');

function install(packages) {
    const zapModulesPath = path.join(process.cwd(), 'zap_modules');
    const zapJsonPath = path.join(process.cwd(), 'zap.json');

    if (!fs.existsSync(zapJsonPath)) {
        console.error('zap.json not found. Run "ZapMgr init" first.');
        return;
    }

    if (!fs.existsSync(zapModulesPath)) {
        fs.mkdirSync(zapModulesPath);
    }

    const zapJson = JSON.parse(fs.readFileSync(zapJsonPath));

    packages.forEach(pkg => {
        const pkgPath = path.join(zapModulesPath, pkg);
        if (!fs.existsSync(pkgPath)) {
            fs.mkdirSync(pkgPath);
            // Create a simple stub for the package
            fs.writeFileSync(path.join(pkgPath, 'index.js'), `// ${pkg} stub`);
            zapJson.dependencies[pkg] = "latest"; // default version stub
            console.log(`Installed ${pkg} in zap_modules`);
        } else {
            console.log(`${pkg} is already installed.`);
        }
    });

    fs.writeFileSync(zapJsonPath, JSON.stringify(zapJson, null, 2));
}

module.exports = install;
