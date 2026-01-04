# Quick Start Guide - User Interface Prototype

## 🎯 What is This?

A **standalone frontend prototype** with the exact same UI as your main application, but using **mocked data** instead of a real backend. Perfect for demos, presentations, and UI development.

## ⚡ Quick Start (3 Steps)

### 1. Navigate to the folder
```powershell
cd user_interface
```

### 2. Run the startup script

**Windows:**
```powershell
.\start.ps1
```

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

### 3. Open your browser
```
http://localhost:3001
```

That's it! 🎉

## 📱 What You'll See

The prototype includes:

- **Dashboard** - Main overview with stats
- **Competitor Intelligence** - Competitor analysis
- **Content Planning** - Content calendar and drafts
- **Publishing** - Publishing interface
- **Campaign & Optimization** - Campaign management
- **ROI Dashboard** - Revenue and ROI metrics
- **Monitoring** - Alerts and trends
- **Settings** - User preferences

All with **realistic mocked data** that looks production-ready!

## 💡 Key Points

✅ **No backend needed** - Everything runs locally  
✅ **No database required** - All data is in-memory  
✅ **No authentication** - Direct access to all pages  
✅ **Port 3001** - Won't conflict with main app (port 3000)  
✅ **Same design** - Identical UI/UX to production frontend  

## 🔧 Customization

### Change Mock Data

Edit `lib/mock-data.ts` to customize:
- Statistics
- Competitor info
- Campaign data
- ROI metrics
- And more!

### Add New Pages

1. Create file: `app/dashboard/[your-page]/page.tsx`
2. Copy pattern from existing pages
3. Add to navigation in `components/dashboard-layout.tsx`

## 🛑 Troubleshooting

**Port 3001 already in use?**
```powershell
# Kill the process or change port in package.json
```

**Dependencies not installing?**
```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
npm cache clean --force
npm install
```

**Build errors?**
```powershell
# Make sure you have Node.js 18+
node --version
```

## 📚 More Information

See `README.md` for detailed documentation.

---

**Ready to demo? Just run `.\start.ps1` and you're good to go! 🚀**
