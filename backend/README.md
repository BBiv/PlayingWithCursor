# Calendar & Todo Backend API

A robust Express.js backend for the Calendar and Todo application, featuring user authentication, todo management, and calendar events.

## 🚀 Features

- **User Authentication**: JWT-based authentication with secure password hashing
- **Todo Management**: CRUD operations for todos with priority levels and categories
- **Calendar Events**: Full event management with recurring events and reminders
- **User Profiles**: Profile management with preferences and notifications
- **Data Validation**: Comprehensive input validation using express-validator
- **Security**: Helmet.js for security headers, CORS configuration
- **Database**: MongoDB with Mongoose ODM

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/calendar-todo-app
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Profile
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Todo Endpoints

#### Get All Todos
```http
GET /api/todos
Authorization: Bearer <token>

# Optional query parameters:
# ?completed=true/false
# ?priority=high/medium/low
# ?category=work
# ?startDate=2025-01-01&endDate=2025-01-31
```

#### Create Todo
```http
POST /api/todos
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the backend API",
  "dueDate": "2025-01-15T10:00:00.000Z",
  "priority": "high",
  "category": "work",
  "tags": ["urgent", "project"]
}
```

#### Update Todo
```http
PUT /api/todos/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true
}
```

#### Toggle Todo Completion
```http
PATCH /api/todos/:id/toggle
Authorization: Bearer <token>
```

#### Delete Todo
```http
DELETE /api/todos/:id
Authorization: Bearer <token>
```

### Event Endpoints

#### Get All Events
```http
GET /api/events
Authorization: Bearer <token>

# Optional query parameters:
# ?startDate=2025-01-01&endDate=2025-01-31
# ?category=meeting
```

#### Create Event
```http
POST /api/events
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Team Meeting",
  "description": "Weekly team sync",
  "startDate": "2025-01-15T10:00:00.000Z",
  "endDate": "2025-01-15T11:00:00.000Z",
  "allDay": false,
  "location": "Conference Room A",
  "color": "#57E1FF",
  "category": "meeting"
}
```

#### Get Events for Specific Date
```http
GET /api/events/date/2025-01-15
Authorization: Bearer <token>
```

### User Endpoints

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com",
  "notifications": true,
  "preferences": {
    "theme": "dark",
    "timezone": "UTC"
  }
}
```

#### Update Notifications
```http
PUT /api/users/notifications
Authorization: Bearer <token>
Content-Type: application/json

{
  "notifications": true
}
```

## 🗄️ Database Models

### User Model
- `name`: String (required)
- `email`: String (unique, required)
- `password`: String (hashed, required)
- `profilePhoto`: String (optional)
- `notifications`: Boolean (default: false)
- `preferences`: Object (theme, timezone)

### Todo Model
- `user`: ObjectId (ref: User)
- `title`: String (required)
- `description`: String (optional)
- `dueDate`: Date (required)
- `priority`: String (low/medium/high)
- `completed`: Boolean (default: false)
- `category`: String (default: "General")
- `tags`: Array of strings
- `recurring`: Object (type, interval)

### Event Model
- `user`: ObjectId (ref: User)
- `title`: String (required)
- `description`: String (optional)
- `startDate`: Date (required)
- `endDate`: Date (required)
- `allDay`: Boolean (default: false)
- `location`: String (optional)
- `color`: String (hex color)
- `category`: String (default: "General")
- `tags`: Array of strings
- `recurring`: Object (type, interval, endDate)
- `reminders`: Array of objects
- `attendees`: Array of objects

## 🔧 Development

### Scripts
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests
```

### Project Structure
```
backend/
├── config/
│   └── database.js      # MongoDB connection
├── middleware/
│   └── auth.js          # JWT authentication
├── models/
│   ├── User.js          # User model
│   ├── Todo.js          # Todo model
│   └── Event.js         # Event model
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── todos.js         # Todo routes
│   ├── events.js        # Event routes
│   └── users.js         # User routes
├── server.js            # Main server file
├── package.json
└── README.md
```

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: express-validator for request validation
- **Security Headers**: Helmet.js for security headers
- **CORS Configuration**: Proper CORS setup for frontend integration
- **Error Handling**: Comprehensive error handling and logging

## 🚀 Deployment

### Local Development
1. Install MongoDB locally
2. Set up environment variables
3. Run `npm run dev`

### Production Deployment
1. Set up MongoDB Atlas or production MongoDB
2. Configure environment variables for production
3. Use PM2 or similar process manager
4. Set up reverse proxy (nginx) if needed

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/calendar-todo-app
JWT_SECRET=your-super-secret-production-key
FRONTEND_URL=https://your-frontend-domain.com
```

## 📝 License

MIT License - feel free to use this project for your own applications!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team. 