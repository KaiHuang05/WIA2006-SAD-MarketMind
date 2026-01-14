"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { mockROIData } from "@/lib/mock-data"
import { DollarSign, TrendingUp, Download, Plus, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ROIPage() {
  const { overview, revenueBySource, channelPerformance } = mockROIData
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [uploadMethod, setUploadMethod] = useState<"manual" | "file">("manual")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsDialogOpen(false)
    toast({
      title: "Campaign Data Added",
      description: "Your campaign data has been successfully recorded and will be reflected in the dashboard.",
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded and is being processed.`,
      })
      setIsDialogOpen(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">ROI Dashboard</h2>
            <p className="text-muted-foreground text-lg">
              Track performance and maximize your marketing returns
            </p>
          </div>
          <div className="flex gap-3">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Campaign Data
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Add Campaign Data</DialogTitle>
                  <DialogDescription>
                    Enter your campaign performance data manually or upload a report file.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="flex gap-2 mb-4">
                  <Button
                    type="button"
                    variant={uploadMethod === "manual" ? "default" : "outline"}
                    onClick={() => setUploadMethod("manual")}
                    className="flex-1"
                  >
                    Manual Entry
                  </Button>
                  <Button
                    type="button"
                    variant={uploadMethod === "file" ? "default" : "outline"}
                    onClick={() => setUploadMethod("file")}
                    className="flex-1"
                  >
                    Upload File
                  </Button>
                </div>

                {uploadMethod === "manual" ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="campaign-name">Campaign Name</Label>
                        <Input
                          id="campaign-name"
                          placeholder="e.g., Q1 Social Media Campaign"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="spend">Total Spend (RM)</Label>
                          <Input
                            id="spend"
                            type="number"
                            placeholder="0.00"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="revenue">Revenue (RM)</Label>
                          <Input
                            id="revenue"
                            type="number"
                            placeholder="0.00"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="conversions">Conversions</Label>
                          <Input
                            id="conversions"
                            type="number"
                            placeholder="0"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="channel">Channel</Label>
                          <Input
                            id="channel"
                            placeholder="e.g., Google Ads"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-gradient-to-r from-green-500 to-blue-500">
                        Add Campaign
                      </Button>
                    </DialogFooter>
                  </form>
                ) : (
                  <div className="py-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <Label
                        htmlFor="file-upload"
                        className="cursor-pointer"
                      >
                        <span className="text-sm text-primary hover:underline">
                          Click to upload
                        </span>
                        <span className="text-sm text-muted-foreground"> or drag and drop</span>
                      </Label>
                      <p className="text-xs text-muted-foreground mt-2">
                        CSV, Excel, or PDF (MAX. 10MB)
                      </p>
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept=".csv,.xlsx,.xls,.pdf"
                        onChange={handleFileUpload}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Supported formats include campaign reports from Google Ads, Facebook Ads Manager, and generic CSV templates.
                    </p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
            
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid gap-4 md:grid-cols-4 animate-slide-in-up">
          <Card className="hover-lift border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">RM{overview.totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-red-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">RM{overview.totalCost.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{overview.roi}%</div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{overview.profitMargin}%</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="channels" className="space-y-4">
          <TabsList>
            <TabsTrigger value="channels">Channel Performance</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Sources</TabsTrigger>
          </TabsList>

          <TabsContent value="channels" className="space-y-4">
            <Card className="hover-lift border-blue-500/20">
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Performance metrics by marketing channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {channelPerformance.map((channel, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-500/50 transition-all hover-lift">
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{channel.channel}</p>
                        <p className="text-sm text-muted-foreground">
                          {channel.conversions.toLocaleString()} conversions
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-6 text-right">
                        <div>
                          <p className="text-sm text-muted-foreground">Spend</p>
                          <p className="font-bold text-lg text-red-400">RM{channel.spend.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Revenue</p>
                          <p className="font-bold text-lg text-green-400">RM{channel.revenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{channel.roi}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <Card className="hover-lift border-green-500/20">
              <CardHeader>
                <CardTitle>Revenue by Source</CardTitle>
                <CardDescription>Revenue breakdown by traffic source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueBySource.map((source, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-lg">{source.source}</p>
                        <div className="text-right">
                          <p className="font-bold text-xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">RM{source.revenue.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">{source.percentage}% of total</p>
                        </div>
                      </div>
                      <div className="h-3 w-full bg-secondary/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
