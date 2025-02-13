# Project Discontinued 🚫

This project has been **discontinued** due to migration to another language. It is now being developed in **Flutter**, as it better meets the needs of the project.

## 📌 Reason for the Change
- **Flutter** offers greater compatibility across multiple platforms.
- Improved performance and UI flexibility.
- Stronger support and an active community.

The original code will remain available in this repository for reference only.

---



```markdown:README.md
# PenKitApp

A modern desktop application built with Next.js and Electron that provides a curated collection of pentesting tools and resources. Features a sleek, cyberpunk-inspired interface with a focus on security testing tools.

## Features

- 🛠️ Curated collection of pentesting tools
- 🔍 Built-in search functionality
- 🎯 Tool categorization and tagging
- 🌙 Dark mode optimized interface
- 💻 Cross-platform compatibility

## Current Tools

- **Ligolo**: Advanced tunneling tool for penetration testing
- **Proxychains**: Network traffic routing tool for anonymity

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/4rji/penkitapp.git
cd penkitapp
```

2. Install dependencies:
```bash
npm install
```

3. Run in development mode:
```bash
npm run electron-dev
```

### Building for Production

Build for your specific platform:

```bash
# For macOS ARM64 (M1/M2)
npm run make

# For Linux (AppImage)
npm run make:appimage

# For Linux (DEB package)
npm run make:deb
```

The built applications will be available in the `dist` folder.

## Project Structure

```
penkitapp/
├── pages/              # Next.js pages
│   ├── _app.js        # App configuration
│   ├── index.js       # Main page
│   └── tools.js       # Tools page
├── styles/            # CSS styles
│   └── globals.css    # Global styles
├── main.js           # Electron main process
├── preload.js        # Electron preload script
└── package.json      # Project configuration
```

## Tech Stack

- **Next.js**: React Framework
- **Electron**: Desktop Application Framework
- **React**: UI Library
- **CSS**: Custom styling with cyberpunk theme

## Scripts

- `npm run dev`: Start Next.js development server
- `npm run electron-dev`: Run in development mode
- `npm run make`: Build for production (macOS)
- `npm run make:linux`: Build for Linux
- `npm run make:appimage`: Create Linux AppImage
- `npm run make:deb`: Create Debian package

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the ISC License.

## Author

- 4rji
- GitHub: [4rji](https://github.com/4rji)

## Acknowledgments

- Built for the cybersecurity community
- Inspired by modern pentesting workflows
```