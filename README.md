# 🚀 Node.js + Express + CORS Backend Starter

A lightweight and modular **backend starter template** built with **Node.js**, **Express**, and **CORS**. Designed to help developers quickly set up a backend server with clean architecture and best practices.

---

## 📆 Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **dotenv**
- **Nodemon** (for development)

---

## 📁 Project Structure

```
backend-starter/
│
├── src/
│   ├── config/         # Configuration files (e.g., database, environment)
│   ├── routes/         # Route definitions
│   ├── middlewares/    # Custom middleware functions
│   ├── controllers/    # Controllers functions
│   ├── models/         # Models for DB
│   ├── services/       # Business logic or service layer
│   ├── utils/          # Custom helper functions
│   ├── app.js          # Express app setup and middleware registration
│   └── server.js       # Entry point for the server
│
├── .env.example        # Sample environment variables
├── .gitignore          # Git ignored files/folders
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## 🛠️ Installation

```bash
git clone https://github.com/shweta-angularminds/backend-starter-node-express.git
cd backend-starter-node-express
npm install
cp .env.example .env
```

> Fill in your `.env` with appropriate values.

---

## 🧪 Run the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

---

## 🧰 Available Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `npm run dev` | Runs the server with `nodemon` |
| `npm start`   | Runs the server normally       |

---

## 🌐 Default Endpoint

Once running, access the base route:

```
GET http://localhost:5000/api
```

It should respond with:

```json
{ "message": "API is running..." }
```

---

## 🧱 Ideal For

- Quick backend prototypes
- Learning Express.js
- Building REST APIs
- Kickstarting full-stack apps

---

## 📌 Environment Variables

Create a `.env` file based on `.env.example`. Example values:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/my-database
```

## ✨ Author

Made with ❤️ by [Shweta Phadatare](https://github.com/shweta-angularminds)
