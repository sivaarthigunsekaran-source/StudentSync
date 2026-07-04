StudentSync - Backend API Design (Spring Boot)
🎯 Overview

This document defines all REST APIs for StudentSync system including:

Authentication
Dashboard
Study Planner
Attendance
Exams
Placements
Finance
Analytics

Base URL:

/api/v1
🔐 1. Authentication APIs
Register User
POST /auth/register
Request
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456",
  "department": "CSE",
  "year": 3
}
Response
{
  "message": "User registered successfully",
  "userId": 1
}
Login User
POST /auth/login
Request
{
  "email": "john@gmail.com",
  "password": "123456"
}
Response
{
  "token": "jwt-token",
  "userId": 1
}
📊 2. Dashboard API
Get Dashboard Data
GET /dashboard/{userId}
Response
{
  "lifeScore": 85,
  "attendance": 90,
  "tasksPending": 5,
  "upcomingExams": 2
}
📚 3. Study Planner APIs
Create Task
POST /tasks
Get All Tasks
GET /tasks/{userId}
Update Task
PUT /tasks/{taskId}
Delete Task
DELETE /tasks/{taskId}
📅 4. Attendance APIs
Add Attendance
POST /attendance
Get Attendance
GET /attendance/{userId}
📊 5. Exams APIs
Add Exam
POST /exams
Get Exams
GET /exams/{userId}
💼 6. Placement APIs
Apply Job
POST /placements
Get Applications
GET /placements/{userId}
💰 7. Finance APIs
Add Expense/Income
POST /finance
Get Finance Data
GET /finance/{userId}
📈 8. Analytics APIs
Get Analytics
GET /analytics/{userId}
Response
{
  "studyScore": 80,
  "attendanceScore": 90,
  "placementScore": 70,
  "financeScore": 60,
  "lifeScore": 75
}
⚙️ 9. HTTP Status Codes
200 → Success
201 → Created
400 → Bad Request
401 → Unauthorized
404 → Not Found
500 → Server Error
🔗 10. API Flow Example

Login → JWT Token → Use token for all APIs