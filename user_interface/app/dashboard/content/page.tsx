"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockContentPlanning } from "@/lib/mock-data"
import { Plus, Calendar, Edit, Send, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContentPage() {
  const { drafts, calendar } = mockContentPlanning
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [contentTitle, setContentTitle] = useState("")
  const [contentBody, setContentBody] = useState("")
  const [contentPlatform, setContentPlatform] = useState("")
  const [useAI, setUseAI] = useState(false)
  const { toast } = useToast()

  const handleGenerateAI = () => {
    setUseAI(true)
    setContentTitle("Spring Sale: 40% Off All Products!")
    setContentBody("🌸 Spring into savings! Get 40% off everything in our store this week only. Don't miss out on amazing deals for your home and lifestyle. Shop now and transform your space! #SpringSale #LimitedOffer")
    toast({
      title: "AI Content Generated!",
      description: "Your social media post has been created.",
    })
  }

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved!",
      description: `"${contentTitle}" has been saved to drafts.`,
    })
    setIsDialogOpen(false)
    setContentTitle("")
    setContentBody("")
    setContentPlatform("")
    setUseAI(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Content Planning</h2>
            <p className="text-muted-foreground text-lg">
              Generate AI-powered social media content and schedule posts
            </p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
            <Plus className="mr-2 h-4 w-4" />
            New Content
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create Social Media Content</DialogTitle>
              <DialogDescription>
                Use AI to generate engaging social media posts for your campaigns
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select value={contentPlatform} onValueChange={setContentPlatform}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="twitter">Twitter/X</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Campaign/Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Summer Sale Promotion"
                  value={contentTitle}
                  onChange={(e) => setContentTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your post or use AI to generate..."
                  value={contentBody}
                  onChange={(e) => setContentBody(e.target.value)}
                  rows={6}
                />
              </div>
              <Button
                onClick={handleGenerateAI}
                variant="outline"
                className="w-full border-blue-500/20 hover:bg-blue-500/10"
              >
                <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
                Generate with AI
              </Button>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveDraft} className="bg-gradient-to-r from-blue-500 to-cyan-500">
                Save Draft
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Tabs defaultValue="drafts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="drafts" className="space-y-4">
            <div className="grid gap-4 animate-slide-in-up">
              {drafts.map((draft) => (
                <Card key={draft.id} className="hover-lift border-cyan-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{draft.title}</CardTitle>
                        <CardDescription className="mt-2 text-base">
                          {draft.content}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="hover-lift">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                          {draft.platform}
                        </span>
                        <span className={`px-3 py-1 rounded-full font-medium ${
                          draft.status === 'scheduled' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {draft.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">AI Score:</span>
                          <span className={`font-bold ${
                            draft.aiScore >= 90 ? 'text-green-400' :
                            draft.aiScore >= 80 ? 'text-blue-400' :
                            'text-yellow-400'
                          }`}>
                            {draft.aiScore}%
                          </span>
                        </div>
                        <span className="text-muted-foreground">
                          {new Date(draft.scheduledFor).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <Card className="hover-lift border-blue-500/20">
              <CardHeader>
                <CardTitle>Content Calendar</CardTitle>
                <CardDescription>Upcoming scheduled posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {calendar.map((day, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-500/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                          <Calendar className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{new Date(day.date).toLocaleDateString()}</p>
                          <p className="text-sm text-muted-foreground">
                            {day.posts} {day.posts === 1 ? 'post' : 'posts'} scheduled
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {day.platforms.map((platform, pidx) => (
                          <span
                            key={pidx}
                            className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium"
                          >
                            {platform}
                          </span>
                        ))}
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
