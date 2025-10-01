# 🚀 StryveAhead MySQLi Setup Instructions

## ✅ What's Been Set Up

1. **MySQLi Connection**: Simple, reliable database connection using `mysqli_connect`
2. **Contact Form Integration**: Contact form now saves to database
3. **Admin Interface**: Basic admin panel to view submissions
4. **Database Table**: Structure for storing contact information

## 🔧 Step-by-Step Setup

### Step 1: Create the Database Table
1. **Open phpMyAdmin** (or your MySQL console)
2. **Select your database**: `stryveahead_db` 
3. **Run the SQL** from `create_contact_table.sql`:

```sql
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
```

### Step 2: Test the MySQLi Connection
1. **Visit**: `http://stryveahead.com/test_mysqli_connection.php`
2. **Check for**:
   - ✅ MySQLi Connection Successful
   - ✅ contact_info table exists
   - ✅ Function is ready to use

### Step 3: Test Contact Form
1. **Go to your website**: `http://stryveahead.com/`
2. **Fill out the contact form** 
3. **Submit** and check for success message
4. **Verify data was saved** using the admin panel

### Step 4: Access Admin Panel
1. **Visit**: `http://stryveahead.com/admin/view_contacts.php`
2. **Login with password**: `admin123`
3. **View submitted contacts**
4. **Export CSV** if needed

## 📁 Files Created/Modified

### New Files:
- `includes/mysqli_connection.php` - Database connection functions
- `create_contact_table.sql` - Database table creation
- `test_mysqli_connection.php` - Connection testing
- `admin/view_contacts.php` - Admin interface

### Modified Files:
- `api/contact.php` - Updated to use MySQLi

## 🧪 Testing Checklist

- [ ] Database connection works
- [ ] contact_info table created
- [ ] Contact form submits successfully
- [ ] Data appears in database
- [ ] Admin panel shows submissions
- [ ] CSV export works

## 🔒 Security Recommendations

### For Production:
1. **Change admin password** in `admin/view_contacts.php`
2. **Delete test files**:
   - `test_mysqli_connection.php`
   - `quick_db_test.php`
   - `fix_database.php`
3. **Secure admin directory** with proper authentication
4. **Use HTTPS only**
5. **Regular database backups**

## 🚨 Troubleshooting

### "Table doesn't exist" error:
- Run the SQL from `create_contact_table.sql`

### "Access denied" error:
- Check your `.env` file configuration
- Verify database user permissions

### Contact form not working:
- Check browser console for JavaScript errors
- Verify API endpoint is accessible

### Admin panel login fails:
- Default password is `admin123`
- Check browser cookies are enabled

## 🎯 Next Steps

1. **Test everything thoroughly**
2. **Delete test files** after confirmation
3. **Change default passwords**
4. **Set up proper backups**
5. **Monitor form submissions**

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Look at server error logs
3. Verify database credentials
4. Test database connection directly

Your contact form is now fully integrated with MySQLi database storage!

