
# 📝 Blogging Platform - MERN Stack

A full-stack blogging web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This platform allows users to **create**, **edit**, and **delete blog posts**, as well as **comment** on others’ blogs. Clean UI, secure backend, and intuitive features make it a seamless writing and reading experience.

---

## 🚀 Features

- ✍️ User authentication and authorization (JWT-based)
- 🗃️ Create, edit, delete personal blog posts
- 💬 Comment on other users' posts
- 🔒 Protected routes for authenticated actions
- 📄 Rich text editor for blog formatting
- 📜 Blog feed with pagination and filtering

---

## 🛠️ Tech Stack

| Layer          | Technology         |
|----------------|---------------------|
| Frontend       | React.js, Axios, CSS |
| Backend        | Node.js, Express.js |
| Database       | MongoDB, Mongoose   |
| Authentication | JWT, bcrypt         |

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-blogging-platform.git
   ```

2. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Backend Setup**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Environment Variables**

   Create a `.env` file in `server/` with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

---

## 📷 Screenshots

*(You can add images here to showcase key pages like the blog feed, editor, and comment section)*

---

## ✨ Roadmap

- [x] User registration/login
- [x] Blog CRUD operations
- [x] Comment system
- [ ] Tag-based filtering
- [ ] Like and bookmark features
- [ ] Admin dashboard

---

## 🤝 Contributing

Contributions are welcome! If you’d like to fix a bug or suggest a feature:
- Fork the repo
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

---

