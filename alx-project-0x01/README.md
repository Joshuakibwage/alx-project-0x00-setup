# 🏗️ ALX Project: Next.js Architecture - `alx-project-0x01`

A feature-rich Next.js web application demonstrating advanced architecture patterns, reusable components, state management, and responsive design. Built as part of the **ALX ProDevFE** program to deepen understanding of scalable front-end development using **TypeScript**, **Tailwind CSS**, and **Next.js**.

---

## 🚀 Project Overview

This project simulates a **content management interface** with pages to view, add, and manage both **posts** and **users**, powered by the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) mock API. It leverages modern UI/UX practices and strong architectural decisions for scalability and reusability.

---

## 🎯 Features

- ✅ Next.js App setup with ESLint, Tailwind CSS, and TypeScript
- ✅ Dynamic routing between Home, Posts, and Users
- ✅ Modular component architecture with separation of concerns
- ✅ Interactive modals for adding posts and users
- ✅ Static site generation with `getStaticProps`
- ✅ Type-safe props and event handling
- ✅ Responsive layout and mobile-friendly design

---

## 📁 Project Structure

alx-project-0x01/
├── components/
│ ├── common/ # Reusable UI components (PostCard, UserCard, Modals, etc.)
│ └── layout/ # App layout components (Header, Footer)
├── interfaces/ # TypeScript interfaces
├── pages/
│ ├── posts/ # Posts listing and modal integration
│ ├── users/ # Users listing and modal integration
│ └── index.tsx # Welcome page
├── public/ # Static assets
├── styles/ # Global Tailwind styles
└── ...


---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: JSONPlaceholder (REST API)
- **Tooling**: ESLint, Prettier, npm

---

## 🧠 Learning Objectives

By completing this project, I gained hands-on experience in:

- Setting up a production-ready Next.js app with TypeScript & Tailwind
- Creating and organizing reusable components with strong type safety
- Managing UI state with React hooks
- Structuring a scalable frontend codebase by domain
- Working with external APIs and SSG (`getStaticProps`)
- Creating accessible, responsive, and modern user interfaces

---


## 🔍 Key Components

| Component         | Purpose                                 |
|------------------|------------------------------------------|
| `PostCard.tsx`    | Displays individual post data            |
| `UserCard.tsx`    | Displays user information                |
| `PostModal.tsx`   | Modal to add a new post                  |
| `UserModal.tsx`   | Modal to add a new user                  |
| `Header.tsx`      | Navigational header across all pages     |
| `Footer.tsx`      | Reusable footer (if used)                |
| `index.tsx`       | Home splash screen                       |

---

## ✅ Completed Tasks Summary

| Task # | Description                                | Score   |
|--------|--------------------------------------------|---------|
| 0      | Project Setup (Next.js, Tailwind, ESLint)  | 100% ✅ |
| 1      | Navigation between pages                   | 100% ✅ |
| 2      | Post Card Component                        | 66.67% ✅ |
| 3      | User Card Component                        | 60% ✅ |
| 4      | Add Post Modal Functionality               | 100% ✅ |
| 5      | Add User Modal Functionality               | 66.67% ✅ |

---

## 🧩 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Joshuakibwage/alx-project-0x01-setup.git
cd alx-project-0x01

# Install dependencies
npm install

# Start the dev server
npm run dev -- -p 3000

# Open in browser
http://localhost:3000

🙋‍♂️ Author

Joshua Kibwage
Frontend Developer @ ALX Africa

📜 License

This project is licensed under the MIT License.
Feel free to fork, remix, and contribute.
🌱 Reflection & Takeaways

    This project challenged me to think beyond just building UI. I learned the importance of structure, scalability, and type safety. Creating modals from scratch and integrating real API data gave me confidence to work with more advanced frontend patterns.
