# Keeper - React Note Taking App

A simple and elegant note-taking application built with React and Vite. Create, manage, and delete notes with a clean, Google Keep-inspired interface.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Create Notes** - Add new notes with a title and content
- **Delete Notes** - Remove notes you no longer need
- **Responsive Design** - Clean UI that works on different screen sizes
- **Pre-loaded Sample Notes** - Includes example notes to get you started
- **Dynamic Footer** - Automatically updates copyright year

## Tech Stack

- **React 19** - Modern React with functional components and hooks
- **Vite** - Next-generation frontend build tool for fast development
- **ESLint** - Code linting for consistent code quality
- **CSS3** - Custom styling with modern CSS features

## Project Structure

```
src/
├── main.jsx            # Application entry point
├── index.css           # Global styles
├── notes.jsx           # Sample notes data
├── assets/             # Static assets
└── component/
    ├── App.jsx         # Main app component with state management
    ├── Header.jsx      # App header with branding
    ├── Footer.jsx      # Footer with dynamic copyright
    ├── CreateArea.jsx  # Form component for creating notes
    └── Note.jsx        # Individual note display component
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/note-keeper-app.git
   cd note-keeper-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## Usage

1. **Creating a Note**
   - Enter a title in the "Title" field
   - Add your note content in the text area
   - Click the **Add** button to save

2. **Deleting a Note**
   - Click the **DELETE** button on any note to remove it

## Screenshots

## Screenshots

![Keeper App Screenshot](public/screenshots/app.png)


Made with ❤️ using React and Vite
