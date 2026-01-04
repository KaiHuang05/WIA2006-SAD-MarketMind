"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockDashboardStats } from "@/lib/mock-data"
import { DollarSign, TrendingUp, Target, Users, Calendar, Search } from "lucide-react"

export default function DashboardPage() {
  const stats = mockDashboardStats

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dashboard</h2>
          <p className="text-muted-foreground text-lg">
            Welcome back! Here's what's happening with your marketing
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-slide-in-up">
          <Card className="hover-lift border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">{stats.roi}%</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Target className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{stats.activeCampaigns}</div>
              <p className="text-xs text-muted-foreground">
                {stats.totalCampaigns} total campaigns
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-orange-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <Users className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{stats.engagementRate}%</div>
              <p className="text-xs text-muted-foreground">
                +2.3% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          <Card className="hover-lift border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-400" />
                Recent Campaigns
              </CardTitle>
              <CardDescription>Your latest marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold">Q1 2026 Product Launch</p>
                    <p className="text-sm text-muted-foreground mt-1">Multi-channel campaign</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">Active</div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold">Brand Awareness Campaign</p>
                    <p className="text-sm text-muted-foreground mt-1">Social media focused</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">Active</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Top Performing Content
              </CardTitle>
              <CardDescription>Your best content this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold">AI-Powered Content Creation</p>
                    <p className="text-sm text-muted-foreground mt-1">67,000 views</p>
                  </div>
                  <div className="text-lg font-bold text-green-400">+45%</div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold">Marketing Automation 101</p>
                    <p className="text-sm text-muted-foreground mt-1">45,000 views</p>
                  </div>
                  <div className="text-lg font-bold text-green-400">+32%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Actions</span>
            </CardTitle>
            <CardDescription>
              Fast access to your most-used features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover-lift">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Plan Content</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover-lift">
                <Search className="h-5 w-5 text-purple-400" />
                <span className="text-sm">Analyze Competitors</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover-lift">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-sm">View ROI</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover-lift">
                <Target className="h-5 w-5 text-orange-400" />
                <span className="text-sm">New Campaign</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
