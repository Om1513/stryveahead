-- Database Setup Script for StryveAhead
-- Run this script in your MySQL/phpMyAdmin to create the database and user

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS stryveahead_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Create the database user (adjust password as needed)
-- Note: Replace 'your_secure_password' with a strong password
CREATE USER IF NOT EXISTS 'stryveahead_user'@'localhost' IDENTIFIED BY 'your_secure_password';

-- 3. Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON stryveahead_db.* TO 'stryveahead_user'@'localhost';

-- 4. Grant additional permissions if needed
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD ON stryveahead_db.* TO 'stryveahead_user'@'localhost';

-- 5. Apply the changes
FLUSH PRIVILEGES;

-- 6. Show the created user (optional - for verification)
SELECT User, Host FROM mysql.user WHERE User = 'stryveahead_user';

-- 7. Show the database (optional - for verification)
SHOW DATABASES LIKE 'stryveahead_db';
