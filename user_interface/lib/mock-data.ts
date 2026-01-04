// Mock data for the prototype

export const mockUser = {
  id: "user_demo123",
  email: "admin@marketmind.ai",
  name: "MarketMind Admin",
  imageUrl: "https://avatar.vercel.sh/demo",
}

export const mockCompetitors = [
  {
    id: "1",
    name: "Tech Startup Inc",
    website: "https://techstartup.com",
    industry: "Technology",
    keyPhrases: ["innovation", "AI", "cloud computing"],
    analysisStatus: "completed",
    lastAnalyzed: "2026-01-04T10:30:00Z",
    metrics: {
      visibility: 85,
      engagement: 72,
      contentQuality: 90,
      seoScore: 78,
    }
  },
  {
    id: "2",
    name: "Digital Marketing Pro",
    website: "https://digitalmarketingpro.com",
    industry: "Marketing",
    keyPhrases: ["SEO", "content marketing", "social media"],
    analysisStatus: "completed",
    lastAnalyzed: "2026-01-03T15:20:00Z",
    metrics: {
      visibility: 78,
      engagement: 85,
      contentQuality: 82,
      seoScore: 88,
    }
  },
]

export const mockCampaigns = [
  {
    id: "1",
    name: "Q1 2026 Product Launch",
    status: "active",
    platform: "multi-channel",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
    budget: 50000,
    spent: 18500,
    impressions: 1250000,
    clicks: 45000,
    conversions: 3200,
  },
  {
    id: "2",
    name: "Brand Awareness Campaign",
    status: "active",
    platform: "social",
    startDate: "2025-12-15",
    endDate: "2026-02-15",
    budget: 30000,
    spent: 22000,
    impressions: 890000,
    clicks: 32000,
    conversions: 1850,
  },
]

export const mockROIData = {
  overview: {
    totalRevenue: 485000,
    totalCost: 127500,
    roi: 280.4,
    profitMargin: 73.7,
    timeRange: "30d"
  },
  revenueBySource: [
    { source: "Organic Search", revenue: 185000, percentage: 38.1 },
    { source: "Paid Ads", revenue: 145000, percentage: 29.9 },
    { source: "Social Media", revenue: 98000, percentage: 20.2 },
    { source: "Email", revenue: 57000, percentage: 11.8 },
  ],
  channelPerformance: [
    { channel: "Google Ads", spend: 45000, revenue: 145000, roi: 222.2, conversions: 1250 },
    { channel: "Facebook", spend: 28000, revenue: 78000, roi: 178.6, conversions: 890 },
    { channel: "Instagram", spend: 18000, revenue: 52000, roi: 188.9, conversions: 620 },
    { channel: "LinkedIn", spend: 22000, revenue: 68000, roi: 209.1, conversions: 450 },
  ],
}

export const mockContentPlanning = {
  drafts: [
    {
      id: "1",
      title: "Top 10 AI Trends for 2026",
      platform: "blog",
      status: "draft",
      scheduledFor: "2026-01-10T09:00:00Z",
      content: "AI continues to transform industries...",
      aiScore: 92,
    },
    {
      id: "2",
      title: "How to Optimize Your Marketing ROI",
      platform: "linkedin",
      status: "scheduled",
      scheduledFor: "2026-01-08T14:00:00Z",
      content: "Marketing ROI is crucial for business growth...",
      aiScore: 88,
    },
  ],
  calendar: [
    { date: "2026-01-08", posts: 3, platforms: ["LinkedIn", "Twitter", "Blog"] },
    { date: "2026-01-10", posts: 2, platforms: ["Blog", "Instagram"] },
    { date: "2026-01-12", posts: 4, platforms: ["LinkedIn", "Twitter", "Facebook", "Blog"] },
  ],
}

export const mockMonitoring = {
  alerts: [
    {
      id: "1",
      type: "competitor",
      severity: "high",
      message: "Tech Startup Inc launched a new product",
      timestamp: "2026-01-05T08:30:00Z",
    },
    {
      id: "2",
      type: "performance",
      severity: "medium",
      message: "Campaign CTR dropped by 15%",
      timestamp: "2026-01-04T16:45:00Z",
    },
  ],
  trends: [
    { keyword: "AI automation", volume: 125000, trend: "up", change: 35 },
    { keyword: "marketing analytics", volume: 89000, trend: "stable", change: 2 },
    { keyword: "content strategy", volume: 67000, trend: "down", change: -12 },
  ],
}

export const mockDashboardStats = {
  totalCampaigns: 12,
  activeCampaigns: 5,
  totalRevenue: 485000,
  roi: 280.4,
  engagementRate: 6.8,
  conversionRate: 4.2,
}

export const mockYouTubeData = {
  videos: [
    {
      id: "1",
      title: "Marketing Automation 101",
      views: 45000,
      likes: 3200,
      comments: 580,
      publishedAt: "2026-01-01",
      thumbnail: "https://via.placeholder.com/320x180",
    },
    {
      id: "2",
      title: "AI-Powered Content Creation",
      views: 67000,
      likes: 4500,
      comments: 820,
      publishedAt: "2025-12-28",
      thumbnail: "https://via.placeholder.com/320x180",
    },
  ],
  analytics: {
    totalViews: 425000,
    totalSubscribers: 12500,
    averageViewDuration: 285,
    engagement: 7.2,
  },
}
