"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { mockCompetitors } from "@/lib/mock-data"
import { Plus, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CompetitorsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [competitorName, setCompetitorName] = useState("")
  const [competitorWebsite, setCompetitorWebsite] = useState("")
  const [competitorIndustry, setCompetitorIndustry] = useState("")
  const { toast } = useToast()

  const handleAddCompetitor = () => {
    toast({
      title: "Competitor Added!",
      description: `${competitorName} has been added for monitoring.`,
    })
    setIsDialogOpen(false)
    setCompetitorName("")
    setCompetitorWebsite("")
    setCompetitorIndustry("")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Competitor Intelligence</h2>
            <p className="text-muted-foreground text-lg">
              Stay ahead with real-time competitor insights
            </p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Plus className="mr-2 h-4 w-4" />
            Add Competitor
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Competitor</DialogTitle>
              <DialogDescription>
                Monitor a new competitor's marketing activities and performance
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Competitor Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Acme Corp"
                  value={competitorName}
                  onChange={(e) => setCompetitorName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  placeholder="https://example.com"
                  value={competitorWebsite}
                  onChange={(e) => setCompetitorWebsite(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  placeholder="e.g., Technology"
                  value={competitorIndustry}
                  onChange={(e) => setCompetitorIndustry(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddCompetitor} className="bg-gradient-to-r from-purple-500 to-pink-500">
                Add Competitor
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="grid gap-4 md:grid-cols-2 animate-slide-in-up">
          {mockCompetitors.map((competitor) => (
            <Card key={competitor.id} className="hover-lift border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl">{competitor.name}</CardTitle>
                <CardDescription className="text-base">{competitor.website}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                      <p className="text-sm text-muted-foreground">Visibility</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{competitor.metrics.visibility}%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">{competitor.metrics.engagement}%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                      <p className="text-sm text-muted-foreground">Content Quality</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{competitor.metrics.contentQuality}%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20">
                      <p className="text-sm text-muted-foreground">SEO Score</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{competitor.metrics.seoScore}%</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Key Phrases</p>
                    <div className="flex flex-wrap gap-2">
                      {competitor.keyPhrases.map((phrase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium"
                        >
                          {phrase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">
                      Last analyzed: <span className="font-medium text-foreground">{new Date(competitor.lastAnalyzed).toLocaleDateString()}</span>
                    </span>
                    <Button size="sm" variant="outline" className="hover-lift">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
