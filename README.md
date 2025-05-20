# Create MetallicJS App

<p align="center">
  <img src="https://raw.githubusercontent.com/metallicjs/create-metallic-app/c0a3cdc185e3f893f8533e5d1d169ddab5732371/metallicjs-icon.svg" alt="MetallicJS Logo" width="50" height="50">
</p>

<p align="center">
  <strong>Set up a modern MetallicJS app by running one command.</strong>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#available-templates">Available Templates</a> •
  <a href="#command-line-interface">Command Line Interface</a> •
  <a href="#customization">Customization</a> •
</p>

## Overview

`create-metallic-app` is the official CLI tool for bootstrapping MetallicJS applications. It provides a seamless way to create new projects with various templates, allowing you to get started with development in seconds rather than hours.

## Getting Started

### Prerequisites

- Node.js 14.16.0 or later
- npm, yarn, or pnpm package manager

### Creating a New Project

To create a new MetallicJS project, run:

```bash
# Using npx (recommended)
npx create-metallic-app my-app

# Using pnpm
pnpm dlx create-metallic-app my-app

# Using yarn
yarn dlx create-metallic-app my-app
```

This will create a directory called `my-app` inside the current folder, generate the initial project structure, and install all dependencies.

### Starting Development

Once the installation is complete, navigate to your project folder and start the development server:

```bash
cd my-app
npm run dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

## Available Templates

MetallicJS offers several starter templates to match your project needs:

### SaaS Lite (Default)

A simple  Next.js + Express application perfect for getting started quickly.

```bash
npx create-metallic-app my-app
```

**Features:**
- Expressjs Full Authhentication and Profile System
- Next.js for frontend development
- TypeScript for type safety
- CSS Modules for styling
- Basic page structure and navigation


```bash
npx create-metallic-app my-app --template saas-lite
```

**Features:**
- Turborepo for monorepo management
- Next.js frontend
- Express backend
- Shared UI component library
- TypeScript throughout the stack
- Preconfigured development environment

### API Only

A standalone Express API server, perfect for building backend services or microservices.

```bash
npx create-metallic-app my-app --template api-only
```

**Features:**
- Express server with TypeScript
- Structured project layout
- Environment configuration
- Basic middleware setup
- Health check endpoint

## Command Line Interface

```
Usage: create-metallicjs-app [options] <project-directory>

Create a new MetallicJS application

Arguments:
  project-directory         Directory to create the project in

Options:
  -V, --version             output the version number
  -t, --template <template> Template to use (default: "basic-saas")
  -h, --help                display help for command
```

## Customization

### Adding Dependencies

You can add new dependencies to your project using your package manager:

```bash
# Using npm
npm install package-name

# Using pnpm
pnpm add package-name

# Using yarn
yarn add package-name
```

### Modifying Configuration

Each template comes with sensible defaults, but you can customize the configuration to suit your needs:

- **Next.js Configuration**: Edit `next.config.js` to customize your Next.js settings
- **TypeScript Configuration**: Edit `tsconfig.json` to adjust TypeScript settings
- **ESLint Configuration**: Edit `.eslintrc.js` to customize linting rules
- **Prettier Configuration**: Edit `.prettierrc` to adjust code formatting



