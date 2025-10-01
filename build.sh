#!/bin/bash

echo "🚀 Building Stryve Ahead for Production..."

# Create public/css directory if it doesn't exist
mkdir -p public/css

# Build Tailwind CSS
echo "📦 Building CSS..."
npx tailwindcss -i ./src/input.css -o ./public/css/styles.css --minify

# Update browserslist
echo "🔄 Updating browserslist..."
npx update-browserslist-db@latest

# Create deployment package
echo "📁 Creating deployment package..."
zip -r stryveahead-production.zip \
  api/ \
  config/ \
  includes/ \
  public/ \
  templates/ \
  index.php \
  .htaccess \
  setup.sql \
  env.example \
  test.php \
  -x "*.DS_Store" "*.git*" "node_modules/*" "src/*" "*.log"

echo "✅ Build complete! Upload stryveahead-production.zip to your server."
echo ""
echo "📋 Post-deployment steps:"
echo "1. Extract the zip file"
echo "2. Create .env file from env.example"
echo "3. Set up database and import setup.sql"
echo "4. Test with test.php"
echo "5. Configure domain to point to the extracted folder"
