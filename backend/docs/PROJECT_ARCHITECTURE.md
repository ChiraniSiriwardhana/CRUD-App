# CRUD App - Backend Architecture & Flow Documentation

## 📋 Overview

This is a Node.js backend application built with Express.js and MongoDB, designed as an introductory tutorial for backend development. The application follows a modular architecture pattern with clear separation of concerns.

---

## 📂 Project Structure

```
backend/
├── src/
│   ├── index.js              # Entry point - Server initialization
│   ├── app.js                # Express app configuration
│   └── config/
│       ├── database.js       # MongoDB connection logic
│       └── constants.js      # Application constants
├── package.json              # Dependencies & scripts
├── .env                      # Environment variables (not in repo)
└── README.md                 # Project documentation
```

---

## 🔄 Application Flow

### Startup Sequence

```
1. index.js (Entry Point)
   ↓
2. Load environment variables (.env)
   ↓
3. Connect to MongoDB (database.js)
   ↓
4. Import Express app (app.js)
   ↓
5. Start HTTP server
   ↓
6. Listen on specified PORT
```

### Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     SERVER STARTUP FLOW                      │
└─────────────────────────────────────────────────────────────┘

    START
      │
      ↓
┌──────────────────┐
│   index.js       │  ← Entry point
│   runs           │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│   dotenv.config()│  ← Loads .env variables
│                  │    (PORT, MONGODB_URI)
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│   connectDB()    │  ← Connects to MongoDB
│   (database.js)  │    using mongoose
└────────┬─────────┘
         │
         ↓
    ┌────────┐
    │SUCCESS?│
    └───┬────┘
        │
   YES  │  NO
    ↓   │   ↓
    │   │   └─→ [Exit process with error]
    │   │
    ↓   │
┌────────┴────────┐
│  Import app.js  │  ← Express application
│                 │    (routes & middleware)
└────────┬────────┘
         │
         ↓
┌──────────────────┐
│  app.listen()    │  ← Start HTTP server
│  on PORT 8000    │
└────────┬─────────┘
         │
         ↓
   [Server Running]
   API ready at
   http://localhost:8000
```

---

## 📄 File Descriptions

### 1. **index.js** - Server Entry Point

**Purpose:** Bootstraps and starts the application server

**Responsibilities:**
- Loads environment variables using `dotenv`
- Establishes MongoDB database connection
- Imports the Express app
- Starts the HTTP server
- Handles server-level errors
- Logs server status

**Key Code Flow:**
```javascript
1. Load environment variables from .env
2. Define startServer() async function
3. Call connectDB() to connect to MongoDB
4. Set up error handler for app
5. Start listening on PORT
6. Execute startServer()
```

**Error Handling:**
- MongoDB connection failures → logs error and exits
- Server errors → logs error and throws exception

---

### 2. **app.js** - Express Application Configuration

**Purpose:** Configures and exports the Express application instance

**Responsibilities:**
- Creates Express app instance
- Defines API routes
- Sets up middleware (future expansion)
- Exports configured app for server initialization

**Current Routes:**
- `GET /` - Health check endpoint (returns "API is running...")

**Analogy:** Acts as a reception desk:
- Receives incoming requests
- Routes them to appropriate handlers
- Sends responses back to clients

---

### 3. **config/database.js** - MongoDB Connection

**Purpose:** Handles database connection logic

**Responsibilities:**
- Establishes connection to MongoDB using Mongoose
- Handles connection errors
- Logs connection status
- Terminates process on connection failure

**Key Features:**
- Uses async/await for asynchronous connection
- Connects to MongoDB URI from environment variables
- Logs successful connection with host information
- Exits gracefully (process.exit(1)) on failure

**Connection String Source:** `process.env.MONGODB_URI`

---

### 4. **config/constants.js** - Application Constants

**Purpose:** Stores reusable constants across the application

**Current Constants:**
- `DB_Name` = 'intro-to-backend' (database name)

**Usage:** Import constants where needed to maintain consistency

---

### 5. **package.json** - Project Configuration

**Purpose:** Defines project metadata and dependencies

**Key Information:**
- **Name:** crud-app
- **Version:** 1.0.0
- **Type:** module (ES6 modules enabled)
- **Main:** index.js

**Scripts:**
- `npm start` → Runs production server (node src/index.js)
- `npm run dev` → Runs development server with auto-reload (nodemon)

**Dependencies:**
- `express` (^5.2.1) - Web framework
- `mongoose` (^9.1.5) - MongoDB ODM
- `dotenv` (^17.2.3) - Environment variable loader
- `nodemon` (^3.1.11) - Development auto-reload

---

## 🔧 Environment Variables

Required variables in `.env` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | 8000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/intro-to-backend |

---

## 🚀 How to Run

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Expected Output
```
MongoDB connected: <host-address>
Server is running on port: 8000
```

### Test the API
Navigate to: `http://localhost:8000/`  
Expected Response: `API is running...`

---

## 🔐 Security Considerations

1. **Environment Variables:** Sensitive data (DB credentials) stored in .env (not committed)
2. **Error Handling:** Prevents information leakage in error messages
3. **Graceful Shutdown:** Process exits cleanly on critical failures

---

## 🛣️ Request-Response Flow (Future CRUD Operations)

```
Client Request
      ↓
Express App (app.js)
      ↓
Route Handler (to be added)
      ↓
Controller Logic (to be added)
      ↓
MongoDB via Mongoose (database.js)
      ↓
Response back to Client
```

---

## 📈 Future Expansion Points

### App.js
- Add middleware (body-parser, cors, helmet)
- Mount API routes (users, products, etc.)
- Error handling middleware
- Request logging

### Database.js
- Connection pooling configuration
- Retry logic for failed connections
- Database event listeners

### New Files to Add
- `routes/` - API route definitions
- `controllers/` - Business logic handlers
- `models/` - Mongoose schemas
- `middleware/` - Custom middleware functions
- `utils/` - Helper functions

---

## 🐛 Troubleshooting

### Server won't start
- Check if `.env` file exists with correct variables
- Verify MongoDB is running and accessible
- Check if PORT is already in use

### MongoDB connection fails
- Verify `MONGODB_URI` is correct
- Ensure MongoDB server is running
- Check network/firewall settings

### "Cannot find module" errors
- Run `npm install` to install dependencies
- Verify `"type": "module"` is in package.json

---

## 📚 Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5.2.1
- **Database:** MongoDB (via Mongoose v9.1.5)
- **Module System:** ES6 Modules
- **Environment:** dotenv v17.2.3
- **Dev Tool:** nodemon v3.1.11

---

## 👨‍💻 Development Notes

- Uses ES6 module syntax (`import`/`export`)
- Async/await for asynchronous operations
- Modular architecture for scalability
- Follows Node.js best practices
- Suitable for learning backend fundamentals

---

**Last Updated:** February 6, 2026  
**Project Type:** Educational CRUD Application Backend
