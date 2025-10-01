@echo off
echo 🚀 Building Stryve Ahead for Production...

REM Create public/css directory if it doesn't exist
if not exist "public\css" mkdir "public\css"

REM Build Tailwind CSS
echo 📦 Building CSS...
npx tailwindcss -i ./src/input.css -o ./public/css/styles.css --minify

REM Update browserslist
echo 🔄 Updating browserslist...
npx update-browserslist-db@latest

echo ✅ Build complete!
echo.
echo 📋 Next steps:
echo 1. Upload files to your cPanel File Manager
echo 2. Create .env file from env.example
echo 3. Set up database and import setup.sql  
echo 4. Test with test.php
echo 5. Configure domain to point to the files

pause
