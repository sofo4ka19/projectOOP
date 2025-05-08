# 🎓 Kanban Task Manager for Student Teams

## 🔍 Overview
This is a lightweight, responsive Kanban-based task manager designed for student teams or small internal teams to manage work with clarity and flexibility.

Built to make teamwork easy, it allows you to:
- ✅ Drag and drop tasks between columns
- 👥 Assign multiple users to the same task
- 🔁 Reassign tasks to different users
- 📅 Adjust deadlines and track urgency (color-coded based on proximity to due date)
- ✅ Mark tasks as complete or delete them
- ✏️ Modify all task details in real time — title, description, date, assignees
- 💬 Comment within each task for team discussion
- 🧑‍💼 Manage your personal account details

## ✨ Tech Stack
- **Framework:** [Refine](https://github.com/refinedev/refine) (with ready-to-use hooks and components)
- **Frontend:** TypeScript, React, Vite
- **Backend:** NestJS
- **UI Framework:** Ant Design
- **Authentication:** Custom provider
- Codegen, Graphql

## 🧩 Core Features
- Kanban board with real-time updates
- Task status flow (Unassigned → To Do → In Progress → In Review)
- Prioritization and tag support
- Micro-chat / comment section per task
- Simulated reminders

## 🤝 References
This project was based on an example from the official Refine library on GitHub:
https://github.com/refinedev/refine/tree/master/examples/app-crm-minimal

## 🚀 Getting Started
```bash
git clone https://github.com/sofo4ka19/projectOOP.git
cd mini-manager
npm install
npm install react-router-dom
npm run dev
```

> ⚙️ This project uses [Refine](https://github.com/refinedev/refine) with Vite for the frontend and NestJS for the backend. Make sure Node.js and npm are installed.