# App Starter

A modern, production-ready starter template for Vue.js applications using Nuxt 3, TypeScript, and pnpm.

## Overview

This boilerplate provides a robust foundation for building scalable web applications with Vue 3's Composition API and Nuxt's powerful features. It includes essential tooling, type safety, and best practices configurations out of the box.

## ✨ Features

- **Vue 3 + Nuxt 3** - Latest stable versions with Composition API
- **TypeScript** - Full type safety and IDE support
- **Modern Development**
    - 🚀 Fast HMR with Vite
    - 📦 pnpm for efficient package management
    - 🔒 HTTPS development server
    - 🛠️ Vue DevTools integration
- **Code Quality**
    - ESLint configuration
    - Prettier formatting
    - TypeScript strict mode
- **Built-in Modules**
    - `@nuxt/image` for optimized images
    - `@nuxt/icon` for icon management
    - `@nuxt/fonts` for web fonts
- **Developer Experience**
    - Hot Module Replacement (HMR)
    - Scoped CSS support
    - Auto-imports
    - TypeScript path aliases

## 🚀 Quick Start

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Generate SSL certificate for HTTPS development**

    ```bash
    # On macOS or Linux
    mkcert -install
    mkcert localhost

    # On Windows with chocolatey
    choco install mkcert
    mkcert -install
    mkcert localhost
    ```

    This will create two files:

    - `localhost.pem` (certificate)
    - `localhost-key.pem` (private key)

    These files are already configured in the `dev` script and ignored by Git.

4. **Start development server**

    ```bash
    pnpm dev
    ```

5. Open `https://localhost:3000` in your browser

    The browser might show a security warning on first visit. This is normal for local development certificates. You can safely proceed.

## 📦 Scripts

```bash
# Development
pnpm dev          # Start development server with HTTPS
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm format       # Format code with Prettier

# Other
pnpm generate     # Generate static site
```

## 🛠️ Project Structure

```
.
├── assets/           # Static assets (images, styles, etc.)
├── components/       # Vue components
├── composables/      # Composable functions
├── layouts/          # Page layouts
├── pages/           # Application pages and routes
├── public/          # Public static files
├── server/          # Server-side code
└── types/           # TypeScript type definitions
```

## 💻 Development

### Requirements

- Node.js version 18.x or higher
- pnpm version 9.x or higher
- Modern IDE with TypeScript support (VS Code, WebStorm, etc.)

### IDE Setup

For the best development experience:

1. Install recommended IDE extensions:

    - Vue Language Features (Volar)
    - TypeScript Vue Plugin (Volar)
    - ESLint
    - Prettier

2. Enable TypeScript support in your IDE

### Environment Variables

Copy `.env.example` to `.env` and adjust values as needed:

```bash
cp .env.example .env
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
    ```bash
    git checkout -b feature/amazing-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'feat: add amazing feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/amazing-feature
    ```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Nuxt](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🔧 Troubleshooting

### SSL Certificate Issues

If you encounter SSL certificate issues during development:

1. **Certificate not trusted**

    - Ensure `mkcert -install` was run successfully
    - Try removing and regenerating the certificates
    - Check that the certificate files match the names in `package.json`'s dev script

2. **Missing certificates**

    ```bash
    Error: Cannot find certificate files
    ```

    Generate the certificates as described in the Quick Start section.

3. **Windows WSL users**
   If using WSL, run these commands in your WSL terminal:

    ```bash
    sudo apt install libnss3-tools
    mkcert -install
    mkcert localhost
    ```

4. **Custom domain**
   If you need to use a custom domain instead of localhost:
    ```bash
    mkcert your-domain.local
    ```
    Then update the `dev` script in `package.json`:
    ```json
    "dev": "nuxt dev --https --ssl-cert your-domain.local.pem --ssl-key your-domain.local-key.pem"
    ```
