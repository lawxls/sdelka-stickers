#!/bin/bash

# deploy.sh - Deployment script for sdelka-stickers (mounted at /search/)
# This script runs ON THE REMOTE SERVER
# Usage: ./deploy.sh

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

DEPLOY_PATH="${DEPLOY_PATH:-/var/www/sdelka.ai/search}"

print_info() { echo -e "${GREEN}✓${NC} $1"; }
print_step() { echo -e "${BLUE}→${NC} $1"; }

echo "========================================"
echo "  sdelka-stickers Deployment (/search/)"
echo "========================================"
echo ""

print_step "Pulling latest changes..."
git pull origin master
print_info "Latest changes pulled"
echo ""

print_step "Building production bundle..."
npm run build
print_info "Build completed"
echo ""

print_step "Deploying to $DEPLOY_PATH..."
mkdir -p "$DEPLOY_PATH"
rsync -av --delete build/ "$DEPLOY_PATH/"
print_info "Files deployed"
echo ""

echo "========================================"
echo -e "${GREEN}   Deployment Complete!${NC}"
echo "========================================"
