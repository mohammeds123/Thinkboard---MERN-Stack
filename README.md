# 🧠 Thinkboard

> A modern, full-stack notes app built with the MERN stack — capture ideas, organize thoughts, and manage notes with a clean, responsive UI.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## ✨ Features

- 📝 **Full CRUD** — Create, read, update, and delete notes
- 🎨 **Beautiful UI** — Dark theme with radial gradients, Tailwind CSS, and DaisyUI components
- ⚡ **Fast frontend** — React 19 + Vite for a snappy development experience
- 🛡️ **Rate limiting** — Upstash Redis protects the API from abuse
- 🗄️ **Persistent storage** — MongoDB Atlas via Mongoose
- 🔔 **Toast notifications** — Instant feedback for user actions
- 📱 **Responsive design** — Works great on desktop and mobile
- 🚀 **Production-ready** — Single-command build serves the React app from Express

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Vite, React Router, Tailwind CSS, DaisyUI, Axios, Lucide Icons |
| **Backend** | Node.js, Express, Mongoose |
| **Database** | MongoDB |
| **Rate Limiting** | Upstash Redis |
| **Deployment** | Render (free tier compatible) |

---

## 📁 Project Structure

```
MERN-THINKBOARD-PROJECT/
├── backend/
│   └── src/
│       ├── config/        # Database & Upstash setup
│       ├── controllers/   # Route handlers
│       ├── middleware/    # Rate limiter
│       ├── models/        # Mongoose schemas
│       ├── routes/        # API routes
│       └── server.js      # Express entry point
├── frontend/
│   └── vite-project/
│       └── src/
│           ├── components/  # Reusable UI components
│           ├── pages/       # Home, Create, Note Detail
│           └── lib/         # Axios instance & utilities
└── package.json           # Root build & start scripts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Upstash Redis account (for rate limiting)

### 1. Clone the repository

```bash
git clone https://github.com/mohammeds123/VSC.git
cd VSC/MERN-THINKBOARD-PROJECT
```

### 2. Set up environment variables

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### 3. Install dependencies & run

**Backend** (from `backend/`):

```bash
npm install
npm run dev
```

**Frontend** (from `frontend/vite-project/`):

```bash
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` and the API at `http://localhost:5001`.

---

## 📜 Available Scripts

Run these from `MERN-THINKBOARD-PROJECT/`:

| Command | Description |
|---------|-------------|
| `npm run build` | Install dependencies & build the frontend for production |
| `npm run start` | Start the production backend server |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/:id` | Get a single note |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/:id` | Update a note |
| `DELETE` | `/api/notes/:id` | Delete a note |

---

## ☁️ Deployment (Render)

When deploying to [Render](https://render.com):

| Setting | Value |
|---------|-------|
| **Root Directory** | `MERN-THINKBOARD-PROJECT` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm run start` |

Add `MONGO_URI`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and `NODE_ENV=production` as environment variables. Do **not** set `PORT` — Render assigns it automatically.

---

<p align="center">Made with 💜 using the MERN stack</p>
