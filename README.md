# Task Board – Frontend Internship Assignment

## Overview

This is a frontend-only Task Board application built using React.  
The objective of this assignment was to create a functional task management system with authentication, drag-and-drop support, proper state management, and reliable local persistence — without using any backend.

---

## 🔐 Authentication

Static login credentials (as per assignment requirements):

Email: intern@demo.com  
Password: intern123

Features implemented:

- Login with validation
- Proper error handling for invalid credentials
- Remember Me option (stored in localStorage)
- Logout functionality
- Protected routes (unauthenticated users cannot access the board)

---

## 📋 Task Board

The board contains 3 fixed columns:

- Todo
- Doing
- Done

Each task supports the following fields:

- Title (required)
- Description
- Priority (Low / Medium / High)
- Due Date
- Tags
- CreatedAt
- Status

---

## ✅ Implemented Features

- Create task
- Edit task
- Delete task (with confirmation)
- Drag & drop between columns
- Search by title
- Filter by priority
- Sort by due date (empty values appear last)
- Activity log (tracks create, edit, move, delete actions)
- Reset board option with confirmation
- Data persistence using localStorage

All board data persists even after refreshing the page.

---

## 🧠 State Management

React Context API is used to manage:

- Authentication state (AuthContext)
- Task and activity log state (TaskContext)

Filtering and sorting logic is derived before rendering to avoid mutating the original task state.

---

## 💾 Persistence & Reliability

- Task data is stored in localStorage.
- Safe parsing is implemented to handle missing or corrupted storage data.
- Reset Board option clears stored data safely.

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Context API
- dnd-kit (Drag & Drop)
- localStorage
- Vitest (Basic unit tests)

---

## 🧪 Testing

Basic tests are implemented using Vitest and React Testing Library.

To run tests:

npm run test

---

## 🚀 Running the Project Locally

1. Install dependencies:

npm install

2. Start development server:

npm run dev

3. Open in browser:

http://localhost:5173/

---

## 🌐 Deployment

The application is deployed publicly.

Deployment URL: https://task-board-rho-three.vercel.app/login
