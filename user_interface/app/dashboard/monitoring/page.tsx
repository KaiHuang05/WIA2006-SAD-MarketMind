"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockMonitoring } from "@/lib/mock-data"
import { AlertCircle, TrendingUp, TrendingDown, Minus } from "lucide-react"

export default function MonitoringPage() {
  const { alerts, trends } = mockMonitoring

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Continuous Monitoring</h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with real-time alerts and market trends
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-in-up">
          {/* Alerts */}
          <Card className="hover-lift border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-400" />
                Recent Alerts
              </CardTitle>
              <CardDescription>Important notifications and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-xl border transition-all hover-lift ${
                      alert.severity === 'high'
                        ? 'border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-600/5'
                        : 'border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        alert.severity === 'high' 
                          ? 'bg-red-500/20 border border-red-500/30' 
                          : 'bg-yellow-500/20 border border-yellow-500/30'
                      }`}>
                        <AlertCircle className={`h-4 w-4 ${
                          alert.severity === 'high' ? 'text-red-400' : 'text-yellow-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{alert.message}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {new Date(alert.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Keyword Trends */}
          <Card className="hover-lift border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                Keyword Trends
              </CardTitle>
              <CardDescription>Search volume and trending keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trends.map((trend, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-xl hover:border-blue-500/50 transition-all hover-lift">
                    <div className="flex-1">
                      <p className="font-semibold text-base">{trend.keyword}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {trend.volume.toLocaleString()} searches/month
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        trend.trend === 'up' ? 'bg-green-500/20 border border-green-500/30' :
                        trend.trend === 'down' ? 'bg-red-500/20 border border-red-500/30' :
                        'bg-gray-500/20 border border-gray-500/30'
                      }`}>
                        {trend.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-400" />}
                        {trend.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-400" />}
                        {trend.trend === 'stable' && <Minus className="h-5 w-5 text-gray-400" />}
                      </div>
                      <span className={`text-base font-bold ${
                        trend.trend === 'up' ? 'text-green-400' :
                        trend.trend === 'down' ? 'text-red-400' :
                        'text-gray-400'
                      }`}>
                        {trend.change > 0 ? '+' : ''}{trend.change}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
