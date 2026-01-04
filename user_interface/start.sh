#!/bin/bash

echo "🚀 Starting MarketMind..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✨ Starting development server on port 3001..."
echo ""
echo "📱 Open your browser to: http://localhost:3001"
echo "🎯 Experience the full MarketMind interface"
echo ""

npm run dev
