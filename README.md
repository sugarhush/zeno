# dockide



> A browser-based cloud IDE inspired by Replit and CodeSandbox that provides a code editor, file explorer, and terminal connected to isolated Docker environments.

---

## Features

- Browser-based code editor
- Interactive terminal inside the browser
- File explorer with recursive folder support
- Real-time communication between frontend and backend
- Docker-based isolated environments
- Live file editing and synchronization
- Containerized code execution

---

## Tech Stack

### Frontend

- React
- xterm.js
- Socket.io Client
- Code editor component

### Backend

- Node.js
- Express
- Socket.io
- node-pty

### Infrastructure

- Docker containers
- Linux shell environment

---

## Architecture Overview

The system follows a client-server architecture where the browser communicates with a backend server that manages terminal sessions and file operations inside Docker containers.

```

Browser (React)

│
├── Code Editor
├── File Explorer
└── Web Terminal
│
│ WebSocket (Socket.io)
▼

Node.js Server (Express)

│
├── Terminal Manager (node-pty)
├── File System Controller
└── Container Interface
│
▼

Docker Container

├── Bash Shell
├── Project Files
└── Runtime Environment

```

---

## Project Structure

```

dockide/

frontend/
├── src/
│   ├── components/
│   │   ├── Editor
│   │   ├── Terminal
│   │   └── FileExplorer
│   └── App.jsx

backend/
├── server.js
├── terminal.js
└── fileSystem.js

docker/
└── Dockerfile

```

---

## Getting Started

### Prerequisites

- Node.js
- Docker
- npm or yarn

### Clone the Repository

```

git clone git@github.com:sugarhush/dockide.git
cd dockide

```

### Install Dependencies

Backend

```

cd backend
npm install
npm run dev

```

Frontend

```

cd frontend
npm install
npm run dev

```

---

## How It Works

1. The frontend connects to the backend using WebSockets.
2. The backend spawns a terminal session using `node-pty`.
3. Terminal commands are executed inside a container environment.
4. Output is streamed back to the browser in real time.
5. File operations are handled through the server and synced with the UI.

---

## Future Improvements

- Multi-user container orchestration
- Persistent workspaces
- Authentication system
- Multi-language runtime support
- File change watchers
- Code execution API
- Resource limits and sandboxing
- Collaborative editing
- Deployment support

---

## Inspiration

- Replit
- CodeSandbox
- GitHub Codespaces

---

## License

[MIT](./LICENSE)
