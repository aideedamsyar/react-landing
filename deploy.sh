#!/bin/bash

CUSTOM_DOMAIN="https://work.aideedamsyar.com"
# Build and deploy
npm run build
npm run deploy

echo $CUSTOM_DOMAIN > CNAME

# Add changes to git
git add .

# Commit changes
git commit -m "Deploying changes"

# Push changes to main branch
git push origin main
