# ZapMgr

**ZapMgr** is a simple and experimental package manager built with Node.js - designed for educational use, customization, and experimentation. It's meant to simulate how tools like Yarn or npm work under the hood, but in a simplified and Windows-focused environment.

---

## Features

- 'zap.json' project manifest
- Local package install and remove logic
- Custom 'zap_modules/' folder (like node_modules)
- CLI commands via 'node bin/zap.js'
- No internet required - just local simulation for now

---

## Installation

```bash
git clone https://github.com/windows10fan648/zapmgr.git
cd zapmgr
```

Install dependencies (if any in the future):
```bash
npm install
```

Optionally, make the CLI global:
```bash
npm link
```

Now you can use zap from anywhere:
```bash
zap init
zap install example
zap remove example
zap list
```

If you don't link, just use:
```bash
node bin/zap.js [command]
```

## Commands
- init --- Creates a new zap.json file
- install <pkg> --- Simulates installing a package
- remove <pkg> --- Removes a packages from zap_modules
- list --- Show all currently installed packages

## Roadmap
- [] Add real package fetching from a remove server or GitHub
- [] Implement zap-lock.json for version control
- [] Support scoped packages and versioning
- [] Create a public or private Zap registry
- [] Add cross-platform support

## Requirements
- Node.js v16+ (Recommended)
- Windows (Currently only tested on Windows)
- Secure Boot enabled (upcoming requirement)

## License

MIT License 2025 Windows10Fan
