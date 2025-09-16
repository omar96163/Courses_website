# 📚 Courses Website (Frontend)

A modern and responsive **Courses Management UI** built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).  
The platform allows browsing, managing courses, and handling users with role-based permissions — all through an elegant and fast interface.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 14+
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** Integrated login page (ready to connect with backend APIs)

---

## 📌 Features

### 🔹 General

- Fully **responsive design** (desktop, tablet, mobile).

### 🔹 Home Page

- Modern landing page introducing the platform and its features.

### 🔹 Courses Page

- Browse all courses with images and descriptions.
- **Search** and **filter** courses by name or category.
- Add, edit, or delete courses (permissions depend on user role).
- **Pagination** support for large data sets.

### 🔹 Users Page

- Display a list of all users.
- Search and filter users by E-mail
- Managers can delete users directly from the UI.

### 🔹 Authentication

- Clean login page with role-based access ready for backend integration.

### 🔹 API Integration

- Fetch real data for courses and users through backend APIs.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/omar96163/Courses_website.git
cd Courses_website
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will run at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
Courses_website/
│
├── app/                 # Next.js App Router
│   ├── page.tsx         # Home page
│   ├── courses/         # Courses pages
│   ├── users/           # Users pages
│   ├── login/           # Authentication page
│   └── ...
│
├── public/              # Static assets (images, icons)
├── postcss.config       # Tailwind global styles
├── package.json
└── README.md
```

---

## 🧩 Roles & Permissions

| Role        | Permissions                     |
| ----------- | ------------------------------- |
| **User**    | Browse courses                  |
| **Admin**   | Add / Edit / Delete courses     |
| **Manager** | Manage courses and delete users |
