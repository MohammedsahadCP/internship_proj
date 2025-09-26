# Title:Task Manager Application

A full-stack Task Manager Application built with Django REST Framework (backend) and React.js (frontend).
It allows users to register, login, and perform CRUD (Create, Read, Update, Delete) operations on tasks with JWT authentication.

## Backend
Python 3.11+  
Django 4+  
Django REST Framework  
MySQL  
djangorestframework-simplejwt (JWT Authentication)  
drf-yasg (Swagger API Documentation)  

## Frontend
React.js   
Axios  
React Router DOM  
CSS   

## Features
User Registration & Login  
JWT Authentication (access + refresh tokens)  
Role-based access (user vs admin)  
CRUD (Create, Read, Update, Delete) for tasks  
Swagger API documentation  
React frontend integration  



# Installation and Setup

## 1.clone repository
```bash 
git clone https://github.com/MohammedsahadCP/internship_proj.git
cd internship_proj
``` 


## 2.activate virtual environment
for windows:
```bash
python -m venv venv
venv\Scripts\activate 
```
for Mac/Linux:
```bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
```

## 3.install requirements
```bash
pip install -r requirements.txt
```

## 4. Database Setup (MySQL)
Login to MySQL:
```bash
mysql -u root -p;
```
Create database:
```bash
CREATE DATABASE your_db;
```
Create dedicated user:
```bash
CREATE USER 'your_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON your_db.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
```

Verify:
```bash
SHOW DATABASES;

```

## 5.Environment Variables
Create a .env file in backend_project/ and paste the below:
```bash
# Django secret key
SECRET_KEY=your-secret-key-here #it will be in your settings.py paste here

# Debug mode
DEBUG=True

# MySQL database settings
DB_NAME=your_db
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306

```

# 6. run backend
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Open your browser at http://127.0.0.1:8000


# 7.Frontend Setup (React)
```bash
cd /frontend
npm start
```

Frontend runs at: http://localhost:3000/









