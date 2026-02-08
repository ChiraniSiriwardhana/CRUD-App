# CRUD App Backend

A RESTful API backend application built with Node.js, Express, and MongoDB featuring user authentication with secure password hashing.

## 📋 Features

- User registration with email validation
- Secure login with bcrypt password hashing
- MongoDB database integration
- RESTful API architecture
- Input validation and error handling
- Environment variable configuration

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-restart

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── constants.js      # Application constants
│   │   └── database.js        # Database configuration
│   ├── controllers/
│   │   └── user.controller.js # User request handlers
│   ├── models/
│   │   └── user.model.js      # User schema & methods
│   ├── routes/
│   │   └── user.route.js      # API route definitions
│   ├── app.js                 # Express app setup
│   └── index.js               # Server entry point
├── .env                       # Environment variables
└── package.json               # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChiraniSiriwardhana/CRUD-App.git
   cd CRUD-App/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:4000`

## 📡 API Endpoints

### User Authentication

| Method | Endpoint               | Description          | Request Body                                      |
|--------|------------------------|----------------------|---------------------------------------------------|
| POST   | `/api/users/register`  | Register new user    | `{ "username", "email", "password" }`            |
| POST   | `/api/users/login`     | Login existing user  | `{ "email", "password" }`                        |

### Request Examples

**Register User**
```json
POST /api/users/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Login User**
```json
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Response Examples

**Success Response (201)**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "65f1234567890abcdef",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Error Response (400)**
```json
{
  "message": "Invalid password"
}
```

## 🔐 Security Features

- Passwords are hashed using bcrypt with 10 salt rounds
- Email addresses are stored in lowercase for consistency
- Input validation for all required fields
- MongoDB injection protection via Mongoose

## 🧪 Testing

Test the password hashing and authentication flow:
```bash
node test-password.js
```

Clean up test users from database:
```bash
node cleanup-users.js
```

## 📝 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Chirani Siriwardhana**

- GitHub: [@ChiraniSiriwardhana](https://github.com/ChiraniSiriwardhana)

## 🐛 Known Issues

Make sure to:
- Use bcryptjs (not bcrypt) for compatibility
- Delete old users after fixing password hashing bugs
- Always push commits to GitHub after local commits

---

⭐ If you found this project helpful, please give it a star!