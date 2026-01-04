// Mock API client that returns mocked data instead of making real API calls

import {
  mockUser,
  mockCompetitors,
  mockCampaigns,
  mockROIData,
  mockContentPlanning,
  mockMonitoring,
  mockDashboardStats,
  mockYouTubeData,
} from './mock-data'

// Simulate API delay
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {
  // ROI API
  roi: {
    overview: async (range: string) => {
      await delay()
      return mockROIData.overview
    },
    revenueBySource: async (range: string) => {
      await delay()
      return mockROIData.revenueBySource
    },
    channelPerformance: async (range: string) => {
      await delay()
      return mockROIData.channelPerformance
    },
    generateReport: async () => {
      await delay(1000)
      return { success: true, message: "Report generated successfully" }
    },
  },

  // Competitors API
  competitors: {
    list: async () => {
      await delay()
      return mockCompetitors
    },
    get: async (id: string) => {
      await delay()
      return mockCompetitors.find(c => c.id === id)
    },
    create: async (data: any) => {
      await delay()
      return { ...data, id: Date.now().toString() }
    },
    update: async (id: string, data: any) => {
      await delay()
      return { ...mockCompetitors.find(c => c.id === id), ...data }
    },
    delete: async (id: string) => {
      await delay()
      return { success: true }
    },
  },

  // Campaigns API
  campaigns: {
    list: async () => {
      await delay()
      return mockCampaigns
    },
    get: async (id: string) => {
      await delay()
      return mockCampaigns.find(c => c.id === id)
    },
  },

  // Content Planning API
  content: {
    getDrafts: async () => {
      await delay()
      return mockContentPlanning.drafts
    },
    getCalendar: async () => {
      await delay()
      return mockContentPlanning.calendar
    },
    createDraft: async (data: any) => {
      await delay()
      return { ...data, id: Date.now().toString(), status: 'draft' }
    },
  },

  // Monitoring API
  monitoring: {
    getAlerts: async () => {
      await delay()
      return mockMonitoring.alerts
    },
    getTrends: async () => {
      await delay()
      return mockMonitoring.trends
    },
  },

  // Dashboard API
  dashboard: {
    getStats: async () => {
      await delay()
      return mockDashboardStats
    },
  },

  // YouTube API
  youtube: {
    getVideos: async () => {
      await delay()
      return mockYouTubeData.videos
    },
    getAnalytics: async () => {
      await delay()
      return mockYouTubeData.analytics
    },
  },

  // User API
  user: {
    getCurrent: async () => {
      await delay()
      return mockUser
    },
  },
}
