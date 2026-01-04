'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import LiquidEther from '@/components/effects/LiquidEther'
import GradientText from '@/components/effects/GradientText'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to welcome page
    router.push('/welcome')
  }

  const handleDemoLogin = () => {
    setEmail('demo@marketmind.ai')
    setPassword('demo123')
    setTimeout(() => {
      router.push('/welcome')
    }, 500)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          mouseForce={15}
          cursorSize={80}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[0.5px]"></div>

      {/* Login Card */}
      <div className="relative z-20 w-full max-w-md px-4">
        <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">
              <GradientText
                colors={['#40ffaa', '#4079ff', '#ff40aa']}
                animationSpeed={4}
                className="text-3xl font-bold"
              >
                Welcome to MarketMind
              </GradientText>
            </CardTitle>
            <CardDescription className="text-blue-200 text-base">
              Sign in to access your AI-powered marketing dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-white/80 cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded" />
                  Remember me
                </label>
                <button type="button" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6 text-base font-semibold"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-white/60">Or</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleDemoLogin}
                variant="outline"
                className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 py-6 text-base"
              >
                Try Demo Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-white/60">
              Don't have an account?{' '}
              <button className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">
                Sign up for free
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-white/40 text-xs mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}
