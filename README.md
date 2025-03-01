# Task Manager

## Tech Stack
- **FrontEnd:** HTML, CSS, JavaScript
- **BackEnd:** Node.js
- **Database:** MySQL

## Prerequisites
Ensure you have the following software installed:
- **XAMPP** (for MySQL & Apache)
- **Node.js** (Ensure Node.js is installed on your system)

## Clone the Repository
```sh
git clone https://github.com/SanjayMuthuswamy/Taskmanager.git
cd Taskmanager
```

## XAMPP Control Panel
1. Open **XAMPP**.
2. Start **MySQL** and **Apache**.
3. Open **phpMyAdmin**:
   - Navigate to `http://localhost/phpmyadmin/`
   - Select **SQL** option.
   - Paste the SQL file: `task_manager.sql`.
   - Click **Go**.
   - Reload the page.
   - Verify if the database `task_manager` is created (check the side panel).

## Database Configuration
- **Database Name:** `task_manager`

## Backend Setup
```sh
cd backend
npm install
npx nodemon server.js  # or use: npm start
```

### Expected Output
```sh
Running @ localhost:5000
MySQL Connected...
```

## Frontend Setup
1. Open `index.html`.
2. Run with **Live Server**.

```sh
# Your task manager is now running!
```
