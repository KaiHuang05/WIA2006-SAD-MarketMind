# Quick Start Script for MarketMind UI

Write-Host "🚀 Starting MarketMind..." -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "✨ Starting development server on port 3001..." -ForegroundColor Green
Write-Host ""
Write-Host "📱 Open your browser to: http://localhost:3001" -ForegroundColor Cyan
Write-Host "🎯 Experience the full MarketMind interface" -ForegroundColor Yellow
Write-Host ""

npm run dev
