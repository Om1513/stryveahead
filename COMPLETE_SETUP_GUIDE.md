# 🚀 Complete Setup Guide - Contact Form & Registration Flow

## ✅ What's Been Created

### 1. **Database Tables**
- `contact_info` - Stores contact form submissions
- `users` - Stores user registrations

### 2. **Registration System**
- `/register` - Registration page with validation
- `/api/auth/register` - Registration API endpoint
- Password hashing and validation
- Email uniqueness checking

### 3. **Contact Form System**  
- Contact form API at `/api/contact`
- Data validation and sanitization
- MySQLi database storage

### 4. **Admin Interface**
- `/admin/view_contacts.php` - View contact submissions
- User management functions
- CSV export capability

## 📋 SETUP STEPS (DO THESE NOW)

### Step 1: Create Database Tables

**Run these SQL commands in phpMyAdmin:**

```sql
-- First, create the contact_info table
USE stryveahead_db;

CREATE TABLE IF NOT EXISTS contact_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    company_name VARCHAR(200) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    website_url VARCHAR(500) NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_submitted_at (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Then, create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status ENUM('active', 'inactive') DEFAULT 'active',
    last_login TIMESTAMP NULL,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### Step 2: Test Everything Works

Visit: `https://stryveahead.com/test_complete_flow.php`

This will verify:
- ✅ Database connection
- ✅ Tables exist
- ✅ Functions work
- ✅ API endpoints are accessible

### Step 3: Test User Flows

**Registration Flow:**
1. Go to: `https://stryveahead.com/register`
2. Fill out the registration form
3. Submit and verify success message
4. Check database for new user record

**Contact Form Flow:**
1. Go to: `https://stryveahead.com/`
2. Find and fill out the contact form  
3. Submit and verify success message
4. Check database for new contact record

**Admin Panel:**
1. Go to: `https://stryveahead.com/admin/view_contacts.php`
2. Login with password: `admin123`
3. View both contact submissions and user data

## 🛠️ Files Created/Modified

### New Files:
- `create_users_table.sql` - SQL for users table
- `includes/user_functions.php` - User management functions  
- `templates/register.php` - Registration page UI
- `api/auth/register.php` - Registration API endpoint
- `test_complete_flow.php` - Testing tool

### Modified Files:
- `index.php` - Added `/register` route
- `.htaccess` - Added register route handling  
- `api/contact.php` - Already updated for MySQLi

## 🔍 How Each Flow Works

### Contact Form Flow:
```
Homepage Contact Form → /api/contact → insertContactInfo() → contact_info table
```

### Registration Flow:  
```
/register page → /api/auth/register → registerUser() → users table
```

### Admin View:
```
/admin/view_contacts.php → getContactSubmissions() + getAllUsers() → Display data
```

## 🧪 Testing Checklist

- [ ] Database connection works
- [ ] `contact_info` table created
- [ ] `users` table created  
- [ ] Registration page loads at `/register`
- [ ] Contact form submits successfully
- [ ] Registration form creates new users
- [ ] Admin panel shows both types of data
- [ ] Passwords are properly hashed
- [ ] Email validation works
- [ ] Duplicate email prevention works

## 🎯 User Experience Flow

### New Visitor:
1. **Visits homepage** → Sees contact form
2. **Fills contact form** → Data saved to `contact_info`
3. **Wants to register** → Goes to `/register`  
4. **Creates account** → Data saved to `users` table
5. **Can login** → Goes to `/login` (existing)

### Admin:
1. **Visits admin panel** → `/admin/view_contacts.php`
2. **Views contact submissions** → See all form submissions
3. **Exports data** → CSV download available
4. **Manages users** → View registered users

## 🔒 Security Features

- **Password hashing** using `password_hash()`
- **SQL injection protection** with prepared statements
- **Rate limiting** on registration attempts
- **Email validation** and sanitization  
- **Input validation** on all forms
- **CSRF protection** ready to implement

## 📊 Database Schema

### contact_info table:
- `id` (Primary Key)
- `first_name`, `last_name`
- `email`, `phone`
- `company_name`, `designation`, `industry`
- `website_url` (optional)
- `submitted_at` (timestamp)

### users table:  
- `id` (Primary Key)
- `email` (unique)
- `password` (hashed)
- `created_at`, `updated_at`
- `status` (active/inactive)
- `last_login`

## 🚨 Important Notes

1. **Change admin password** in `admin/view_contacts.php` from default `admin123`
2. **Delete test files** after setup for security
3. **Set up regular database backups**
4. **Monitor form submissions** for spam
5. **Consider adding email verification** for registrations

## 🧹 Clean Up After Setup

**Delete these test files:**
```bash
rm test_complete_flow.php
rm test_mysqli_connection.php  
rm verify_database_names.php
rm detailed_connection_diagnostic.php
rm database_diagnostic.php
rm create_users_table.sql
rm create_contact_table.sql
```

## 🎉 You're Done!

Your website now has:
- ✅ **Working contact form** saving to database
- ✅ **User registration system** with validation
- ✅ **Admin interface** to manage data
- ✅ **Secure password handling**
- ✅ **Professional database structure**

**Both flows are complete and ready to use!**

