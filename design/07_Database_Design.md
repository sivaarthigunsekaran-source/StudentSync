Overview

StudentSync uses a relational database (MySQL/PostgreSQL) to store user data, study tasks, attendance, exams, placements, finance, and analytics.

👤 users
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    department VARCHAR(50),
    year INT,
    role ENUM('STUDENT','ADMIN') DEFAULT 'STUDENT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
📚 study_tasks
CREATE TABLE study_tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255),
    description TEXT,
    status ENUM('PENDING','COMPLETED') DEFAULT 'PENDING',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
📅 attendance
CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    subject VARCHAR(100),
    total_classes INT,
    attended_classes INT,
    percentage DECIMAL(5,2),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
📊 exams
CREATE TABLE exams (
    exam_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    subject VARCHAR(100),
    exam_date DATE,
    score INT,
    total_marks INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
💼 placements
CREATE TABLE placements (
    placement_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    company_name VARCHAR(100),
    role VARCHAR(100),
    status ENUM('APPLIED','INTERVIEW','SELECTED','REJECTED'),
    interview_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
💰 finance
CREATE TABLE finance (
    finance_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    type ENUM('EXPENSE','INCOME'),
    category VARCHAR(100),
    amount DECIMAL(10,2),
    description TEXT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
📈 analytics
CREATE TABLE analytics (
    analytics_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    study_score INT,
    attendance_score INT,
    placement_score INT,
    finance_score INT,
    life_score INT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
🔗 Relationships
users → study_tasks (1 to many)
users → attendance (1 to many)
users → exams (1 to many)
users → placements (1 to many)
users → finance (1 to many)
users → analytics (1 to 1)