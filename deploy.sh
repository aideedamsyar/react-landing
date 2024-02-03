#!/bin/bash

# Define variables
CUSTOM_DOMAIN="work.aideedamsyar.com"
REPO_URL="https://github.com/aideedamsyar/react-landing.git"
GH_PAGES_BRANCH="gh-pages"

# Build the project
npm run build

# Navigate into the build directory
cd build

# Create or update the CNAME file with your custom domain
echo "$CUSTOM_DOMAIN" > CNAME

# Initialize a new git repository in the build folder if it's not already a repo
git init

# Add remote repository
git remote add origin $REPO_URL || git remote set-url origin $REPO_URL

# Fetch the gh-pages branch
git fetch origin $GH_PAGES_BRANCH

# Checkout to the gh-pages branch or create it if it doesn't exist
git checkout --orphan $GH_PAGES_BRANCH

# Add all files to git
git add .

# Commit the changes
git commit -m "Deploying changes to GitHub Pages"

# Force push to the gh-pages branch
git push origin $GH_PAGES_BRANCH --force

# Navigate back to the root project directory
cd ..
