"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Calendar,
  Send,
  Lightbulb,
  DollarSign,
  Menu,
  X,
  Search,
  Eye,
  Settings,
  Home,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

const navigation: NavigationItem[] = [
  { 
    name: "Welcome", 
    href: "/welcome", 
    icon: Sparkles, 
    description: "Welcome to MarketMind" 
  },
  { 
    name: "Dashboard", 
    href: "/dashboard", 
    icon: Home, 
    description: "Overview and insights" 
  },
  { 
    name: "Competitor Intelligence", 
    href: "/dashboard/competitors", 
    icon: Search, 
    description: "Monitor competitors" 
  },
  { 
    name: "Content Planning", 
    href: "/dashboard/content", 
    icon: Calendar, 
    description: "Plan your content strategy" 
  },
//  { 
//    name: "Publishing", 
//    href: "/dashboard/publishing", 
//    icon: Send, 
//    description: "Publish and schedule content" 
//  },
  { 
    name: "Campaign & Optimization", 
    href: "/dashboard/optimization", 
    icon: Lightbulb, 
    description: "Optimize your campaigns" 
  },
  { 
    name: "ROI Dashboard", 
    href: "/dashboard/roi", 
    icon: DollarSign, 
    description: "Track return on investment" 
  },
  { 
    name: "Continuous Monitoring", 
    href: "/dashboard/monitoring", 
    icon: Eye, 
    description: "Real-time monitoring" 
  },
  { 
    name: "Settings", 
    href: "/dashboard/settings", 
    icon: Settings, 
    description: "Account and preferences" 
  },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-all duration-300 border-r border-border bg-card",
          sidebarCollapsed ? "w-16" : "w-64",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-border px-4">
            {!sidebarCollapsed && (
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                  M
                </div>
                <span className="font-semibold text-lg">MarketMind</span>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden md:flex"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(`${item.href}/`))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!sidebarCollapsed && (
                    <span className="flex-1">{item.name}</span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User Info */}
          <div className="border-t border-border p-4">
            {!sidebarCollapsed ? (
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  D
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">MarketMind Admin</p>
                  <p className="text-xs text-muted-foreground truncate">admin@marketmind.ai</p>
                </div>
              </div>
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                D
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarCollapsed ? "md:pl-16" : "md:pl-64"
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <div className="flex h-20 items-center gap-4 px-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex-1">
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MarketMind</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Marketing Intelligence</p>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
