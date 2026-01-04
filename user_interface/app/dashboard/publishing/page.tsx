"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export default function PublishingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Publishing</h2>
          <p className="text-muted-foreground text-lg">
            Publish and schedule content across all platforms
          </p>
        </div>

        <Card className="hover-lift border-indigo-500/20">
          <CardHeader>
            <CardTitle>Publishing Center</CardTitle>
            <CardDescription>
              Manage your content publishing and scheduling
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground space-y-4">
              <Send className="h-16 w-16 mx-auto text-indigo-400 opacity-50" />
              <div>
                <p className="text-lg font-medium">Publishing Center</p>
                <p className="text-sm mt-2">Connect your accounts to start publishing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
