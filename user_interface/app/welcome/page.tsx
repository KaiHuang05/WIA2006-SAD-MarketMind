'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Zap, 
  Globe,
  Users,
  BarChart3,
  Lightbulb,
  Calendar,
  Eye,
  Share2,
  Brain,
  Settings,
  ChevronRight,
  Search,
  DollarSign,
  LogIn
} from 'lucide-react';
import LiquidEther from '@/components/effects/LiquidEther';
import ShinyText from '@/components/effects/ShinyText';
import GradientText from '@/components/effects/GradientText';
import { useToast } from '@/hooks/use-toast';

export default function WelcomePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Login Successful!",
      description: `Welcome back, ${email}!`,
    });
    
    setIsLoading(false);
    setIsLoginOpen(false);
    
    // Redirect to dashboard
    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
  };

  const handleDemoLogin = () => {
    setEmail('demo@marketmind.ai');
    setPassword('demo123');
    
    toast({
      title: "Demo Account Loaded",
      description: "Click Login to continue with demo credentials",
    });
  };

  const handleContinueToDashboard = () => {
    setIsLoginOpen(true);
  };

  const handleFeatureHover = (index: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      setActiveFeature(index);
      setIsSliding(true);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleFeatureLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      setActiveFeature(null);
      setIsSliding(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const featureNavigationItems = [
    {
      title: "Content Planning",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-blue-400 to-cyan-400",
      description: "Leverage AI-powered content suggestions tailored to your audience's preferences, trends, and engagement patterns. Plan your content calendar with precision and creativity."
    },
    {
      title: "Continuous Monitoring",
      icon: <Eye className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      description: "Track your social media performance in real-time with comprehensive analytics. Monitor mentions, engagement rates, and audience sentiment across all platforms."
    },
    {
      title: "Multi-Platform Publishing",
      icon: <Share2 className="w-5 h-5" />,
      color: "from-green-400 to-emerald-400",
      description: "Seamlessly publish content across multiple social media platforms with a single click. Schedule posts, manage campaigns, and maintain consistent brand presence."
    },
    {
      title: "Competitor Intelligence",
      icon: <Search className="w-5 h-5" />,
      color: "from-orange-400 to-red-400",
      description: "Gain valuable insights into your competitors' strategies, content performance, and audience engagement. Stay ahead with data-driven competitive analysis."
    },
    {
      title: "ROI Dashboard",
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-400",
      description: "Visualize your marketing ROI with detailed analytics and forecasting. Track campaign performance, calculate returns, and optimize your marketing budget."
    },
    {
      title: "Campaign Optimization",
      icon: <Settings className="w-5 h-5" />,
      color: "from-indigo-400 to-purple-400",
      description: "Optimize your marketing campaigns with AI-driven recommendations. Automatically adjust targeting, timing, and content based on performance data."
    }
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Targeting",
      description: "AI-powered audience segmentation and targeting for maximum impact"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Analytics",
      description: "Real-time insights and predictive analytics to drive exponential growth"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Optimization",
      description: "Automated campaign optimization that adapts to market changes instantly"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Multi-platform distribution with localized content strategies"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[0.5px]"></div>

      {/* Top Feature Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-20 py-4">
            {featureNavigationItems.map((item, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-300 group ${
                  activeFeature === index ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
                onMouseEnter={() => handleFeatureHover(index)}
                onMouseLeave={handleFeatureLeave}
              >
                <span className="font-medium text-sm tracking-wide">
                  {item.title}
                </span>
                
                {/* Underline effect */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color} transition-all duration-300 ${
                  activeFeature === index ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Container with Sliding Animation */}
      <div className={`relative z-20 transition-transform duration-700 ease-in-out pt-16 ${isSliding ? '-translate-y-1/4' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 py-12">
          {/* Main Hero Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <Badge className="mb-6 px-4 py-2 text-sm bg-blue-500/30 text-blue-200 border-blue-400/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to the Future of Marketing
              </Badge>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-70 scale-110">
                    MarketMind
                  </div>
                  {/* Main title with shiny effect */}
                  <ShinyText 
                    text="MarketMind" 
                    disabled={false} 
                    speed={3} 
                    className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black"
                  />
                </div>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-relaxed drop-shadow-lg">
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#ff6b40", "#ff40aa", "#40ffaa"]}
                    animationSpeed={4}
                    showBorder={false}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  >
                    Transform Your Business with AI-Powered Marketing Intelligence
                  </GradientText>
                </h2>
                
                <div className="text-xl md:text-2xl leading-relaxed drop-shadow-md">
                  <GradientText
                    colors={["#60a5fa", "#a78bfa", "#34d399", "#fbbf24", "#f87171"]}
                    animationSpeed={5}
                    showBorder={false}
                    className="text-xl md:text-2xl"
                  >
                    Unlock unprecedented growth, dominate your competition, and achieve extraordinary results with our revolutionary platform.
                  </GradientText>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300 group animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                  <Users className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                  <span className="text-white font-medium">Join 50,000+ Marketers</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300 group animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                  <BarChart3 className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />
                  <span className="text-white font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300 group animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                  <Lightbulb className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                  <span className="text-white font-medium">AI-First Approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white/20 backdrop-blur-md border-white/30 text-center hover:bg-white/25 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 hover:-translate-y-2 animate-bounce-in relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/50 rounded-full animate-ping group-hover:animate-pulse"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse delay-75"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:bg-blue-500/40 group-hover:shadow-lg group-hover:shadow-blue-400/30">
                    <div className="group-hover:animate-pulse">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow-md group-hover:text-blue-200 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-blue-200 text-sm drop-shadow-sm group-hover:text-white transition-colors duration-300">{feature.description}</p>
                </div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#ff6b40", "#ff40aa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-5xl md:text-6xl font-black"
                >
                  Try MarketMind free for 14 days
                </GradientText>
              </h2>
              <p className="text-xl text-blue-200 mb-2">No credit card required. Cancel anytime.</p>
              <p className="text-lg text-blue-300">75% more affordable than Sprout Social</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Starter Plan */}
              <Card className="p-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                    <p className="text-blue-200 text-sm mb-4">Perfect for solopreneurs and small teams</p>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">RM49</span>
                      <span className="text-blue-200">/month</span>
                    </div>
                    <div className="text-xs text-blue-300 mb-6">
                      Compare: Sprout Social RM899/month
                    </div>
                  </div>
                  
                  <Button className="w-full mb-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-full py-3">
                    Start your free trial
                  </Button>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-blue-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      3 social media profiles
                    </div>
                    <div className="flex items-center text-blue-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      AI content generation (50 posts/month)
                    </div>
                    <div className="flex items-center text-blue-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Basic competitor monitoring
                    </div>
                    <div className="flex items-center text-blue-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      ROI analytics dashboard
                    </div>
                    <div className="flex items-center text-blue-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Email support
                    </div>
                  </div>
                </div>
              </Card>

              {/* Growth Plan - Most Popular */}
              <Card className="p-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-md border-green-400/50 hover:from-green-500/25 hover:to-blue-500/25 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-1 text-xs font-bold">
                    Most Popular
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                    <p className="text-green-200 text-sm mb-4">Best for growing businesses</p>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">RM99</span>
                      <span className="text-green-200">/month</span>
                    </div>
                    <div className="text-xs text-green-300 mb-6">
                      Compare: Sprout Social RM1,349/month
                    </div>
                  </div>
                  
                  <Button className="w-full mb-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-full py-3">
                    Start your free trial
                  </Button>
                  
                  <div className="space-y-3 text-sm">
                    <div className="text-green-200 font-medium mb-2">Everything in Starter, plus:</div>
                    <div className="flex items-center text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      10 social media profiles
                    </div>
                    <div className="flex items-center text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Unlimited AI content generation
                    </div>
                    <div className="flex items-center text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Advanced competitor analysis
                    </div>
                    <div className="flex items-center text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Automated content scheduling
                    </div>
                    <div className="flex items-center text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      AI chat assistant
                    </div>
                  </div>
                </div>
              </Card>

              {/* Pro Plan */}
              <Card className="p-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-purple-200 text-sm mb-4">Built for marketing teams & agencies</p>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">RM199</span>
                      <span className="text-purple-200">/month</span>
                    </div>
                    <div className="text-xs text-purple-300 mb-6">
                      Compare: Sprout Social RM1,799/month
                    </div>
                  </div>
                  
                  <Button className="w-full mb-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 rounded-full py-3">
                    Start your free trial
                  </Button>
                  
                  <div className="space-y-3 text-sm">
                    <div className="text-purple-200 font-medium mb-2">Everything in Growth, plus:</div>
                    <div className="flex items-center text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      25 social media profiles
                    </div>
                    <div className="flex items-center text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Real-time competitor alerts
                    </div>
                    <div className="flex items-center text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Advanced AI insights
                    </div>
                    <div className="flex items-center text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      White-label reporting
                    </div>
                    <div className="flex items-center text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Priority support
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enterprise Plan */}
              <Card className="p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md border-orange-400/50 hover:from-orange-500/25 hover:to-red-500/25 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-orange-200 text-sm mb-4">For large organizations</p>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">Custom</span>
                    </div>
                    <div className="text-xs text-orange-300 mb-6">
                      Tailored pricing for your needs
                    </div>
                  </div>
                  
                  <Button className="w-full mb-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 rounded-full py-3">
                    Schedule a demo
                  </Button>
                  
                  <div className="space-y-3 text-sm">
                    <div className="text-orange-200 font-medium mb-2">Everything in Pro, plus:</div>
                    <div className="flex items-center text-orange-200">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Unlimited social profiles
                    </div>
                    <div className="flex items-center text-orange-200">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Custom AI model training
                    </div>
                    <div className="flex items-center text-orange-200">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Dedicated account manager
                    </div>
                    <div className="flex items-center text-orange-200">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Custom integrations
                    </div>
                    <div className="flex items-center text-orange-200">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      24/7 priority support
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Competitive Advantages */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#ff6b40"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-3xl font-bold"
                >
                  Why Choose MarketMind Over Sprout Social?
                </GradientText>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h4 className="text-xl font-bold text-white mb-2">75% Cost Savings</h4>
                  <p className="text-blue-200">Get enterprise-level features at a fraction of the cost</p>
                </div>
                
                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Brain className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="text-xl font-bold text-white mb-2">AI-First Approach</h4>
                  <p className="text-blue-200">Built-in AI content generation and competitor analysis</p>
                </div>
                
                <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h4 className="text-xl font-bold text-white mb-2">Comprehensive ROI</h4>
                  <p className="text-blue-200">Advanced analytics and predictive insights included</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Button 
                onClick={handleContinueToDashboard}
                size="lg" 
                className="px-12 py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <LogIn className="mr-3 h-6 w-6" />
                Sign In to Continue
              </Button>
            </div>
            <p className="text-blue-200 text-lg drop-shadow-md">
              Ready to revolutionize your marketing strategy?
            </p>
          </div>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-white/10 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              <GradientText
                colors={['#40ffaa', '#4079ff', '#ff40aa']}
                animationSpeed={4}
                className="text-2xl font-bold"
              >
                Welcome Back
              </GradientText>
            </DialogTitle>
            <DialogDescription className="text-center text-blue-200">
              Sign in to access your MarketMind dashboard
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 py-4">
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
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                required
              />
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
              <Sparkles className="mr-2 h-4 w-4" />
              Use Demo Account
            </Button>
          </form>

          <div className="text-center text-sm text-white/60">
            Don't have an account?{' '}
            <button className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">
              Sign up for free
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Feature Description Panel */}
      <div className={`fixed top-16 left-0 right-0 h-auto bg-black/95 backdrop-blur-md z-25 transition-all duration-700 ease-in-out border-b border-white/20 ${
        isSliding && activeFeature !== null ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {activeFeature !== null && (
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center">
              <div className="max-w-4xl text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${featureNavigationItems[activeFeature].color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                  <div className="text-white scale-150">
                    {featureNavigationItems[activeFeature].icon}
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#ff6b40", "#ff40aa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-4xl md:text-5xl font-bold"
                  >
                    {featureNavigationItems[activeFeature].title}
                  </GradientText>
                </h2>
                
                <p className="text-xl md:text-2xl text-blue-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                  {featureNavigationItems[activeFeature].description}
                </p>
                
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors duration-300 cursor-pointer group bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20">
                    <span className="text-lg font-medium">Explore Feature</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          70% {
            transform: scale(0.97) translateY(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out both;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
