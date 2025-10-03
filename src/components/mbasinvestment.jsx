import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Building2, GraduationCap, Globe, ChevronRight, Users, Award, Briefcase, Sparkles, Zap, Target, ArrowRight, ChevronLeft, Plus, Minus, ExternalLink, Play, Mail, Phone, MapPin } from 'lucide-react';

export default function MBASInvestment() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      description: 'Premium 50-unit residential development in Abuja with modern amenities and sustainable design',
      link: '#project-1'
    },
    {
      id: 2,
      title: 'Commercial Plaza Development',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      description: 'State-of-the-art commercial space in prime business district with smart building technology',
      link: '#project-2'
    },
    {
      id: 3,
      title: 'Investment Portfolio Growth',
      category: 'Financial Markets',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
      description: 'Diversified stock and crypto portfolio delivering consistent 45% annual returns',
      link: '#project-3'
    },
    {
      id: 4,
      title: 'SLING Education Platform',
      category: 'Education Tech',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop',
      description: 'AI-powered English learning platform connecting 500+ students with expert tutors globally',
      link: '#project-4'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior English Tutor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Working with MBAS has been transformative. The AI platform is incredible, students are motivated, and the compensation package exceeded all my expectations!'
    },
    {
      name: 'David Chen',
      role: 'Full-time Tutor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'Best career decision I made this year. Flexible hours, amazing students, competitive pay, and the support team is always there when you need them.'
    },
    {
      name: 'Emily Roberts',
      role: 'Part-time Tutor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'The cultural exchange is so enriching! I love teaching Chinese students and the monthly salary is better than my previous full-time teaching job.'
    }
  ];

  const faqs = [
    {
      question: 'What are the requirements to become an English tutor?',
      answer: 'We require native or fluent English speakers with a passion for teaching. Previous teaching experience is preferred but not mandatory. We provide comprehensive training on our AI platform and teaching methodologies. A stable internet connection and basic computer equipment are essential.'
    },
    {
      question: 'How flexible is the work schedule?',
      answer: 'Very flexible! You can choose between part-time (15-20 hours/week) or full-time (40+ hours/week) positions. You select your availability and we match you with students in compatible time zones. Many of our tutors work from home on their own schedule.'
    },
    {
      question: 'When and how do tutors get paid?',
      answer: 'Tutors are paid monthly via bank transfer. Payment is processed on the last day of each month and includes base salary (₦350,000-₦450,000) plus any overtime bonuses earned. We also offer quarterly performance incentives based on student satisfaction ratings.'
    },
    {
      question: 'What investment sectors does MBAS focus on?',
      answer: 'We maintain a diversified portfolio across real estate development, stock market investments, cryptocurrency trading, and education technology. This diversification ensures stable returns and minimizes risk while maximizing growth opportunities across multiple sectors.'
    },
    {
      question: 'What equipment do I need to start teaching?',
      answer: 'You need a computer or laptop with a stable internet connection (minimum 10 Mbps), a webcam, and a headset with microphone. Our AI platform is web-based and works on any modern browser. We provide all teaching materials and lesson plans.'
    },
    {
      question: 'How does the AI platform help with teaching?',
      answer: 'Our AI platform provides real-time pronunciation analysis, automated progress tracking, personalized lesson recommendations, and instant feedback tools. It handles administrative tasks so you can focus on what matters most - teaching and connecting with students.'
    }
  ];

  const sectors = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description: 'Strategic property investments and large-scale development projects delivering long-term value and sustainable returns in premium markets across Nigeria.',
      features: ['Commercial Properties', 'Residential Complexes', 'Industrial Spaces', 'Mixed-Use Developments'],
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: TrendingUp,
      title: 'Financial Markets',
      description: 'Active trading in stock markets and cryptocurrency, leveraging advanced analytics and market intelligence for optimal growth and portfolio diversification.',
      features: ['Stock Trading', 'Cryptocurrency', 'Forex Markets', 'Portfolio Management'],
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Revolutionary AI-driven English learning platform in partnership with SLING Education, connecting Chinese students with expert tutors worldwide.',
      features: ['AI-Powered Platform', 'Global Network', 'Cultural Exchange', 'Career Opportunities'],
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setCursorGlow({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const carouselInterval = setInterval(() => {
      setActiveCarousel(prev => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(carouselInterval);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const nextCarousel = () => setActiveCarousel((prev) => (prev + 1) % portfolioItems.length);
  const prevCarousel = () => setActiveCarousel((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  const Footer = () => (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl blur-lg opacity-30" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <span className="text-2xl font-serif font-semibold tracking-tight">MBAS</span>
                <div className="text-sm text-gray-400 font-sans font-light tracking-wide">Investment Limited</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering visionary entrepreneurs and innovative companies to transform emerging markets through strategic capital and operational excellence.
            </p>
            <div className="flex space-x-4">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 group"
                >
                  <Globe className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Sectors', 'Portfolio', 'Careers'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <a href="mailto:info@mbasinvestment.com" className="hover:text-yellow-500 transition-colors">
                  info@mbasinvestment.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <a href="tel:+2341234567890" className="hover:text-yellow-500 transition-colors">
                  +234 (0) 123 456 7890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 MBAS Investment Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative font-sans">
      {/* Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${cursorGlow.x}px ${cursorGlow.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`
        }}
      />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-gray-700/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-black" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <span className="text-xl font-serif font-semibold tracking-tight">MBAS</span>
                <div className="text-xs text-gray-400 font-sans font-light tracking-wide">Investment Limited</div>
              </div>
            </button>

            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Sectors', 'Portfolio', 'Careers', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-5 py-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group font-sans text-sm font-medium tracking-wide"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-gray-700/20">
            <div className="px-4 py-8 space-y-2">
              {['Home', 'About', 'Sectors', 'Portfolio', 'Careers', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-yellow-400 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-sans text-base font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-gray-600 rounded-full blur-[120px] opacity-20 -top-48 -left-48 animate-float" />
          <div className="absolute w-[600px] h-[600px] bg-gray-500 rounded-full blur-[120px] opacity-20 top-1/2 right-0 animate-float-delayed" />
          <div className="absolute w-[400px] h-[400px] bg-gray-700 rounded-full blur-[100px] opacity-20 bottom-0 left-1/3 animate-float-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in-down">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-gray-700/20 to-gray-600/20 border border-gray-600/50 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-gray-400 text-sm font-sans font-medium tracking-wider">DIVERSIFIED INVESTMENT EXCELLENCE</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 leading-tight animate-fade-in-up tracking-tight">
            <span className="block mb-4 font-light">Investing in</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-normal">
              Tomorrow's Future
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-sans font-light tracking-wide">
            Strategic investments across <span className="text-yellow-400 font-medium">real estate</span>, <span className="text-yellow-400 font-medium">financial markets</span>, and <span className="text-yellow-400 font-medium">education technology</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up animation-delay-300">
            <button
              onClick={() => scrollToSection('careers')}
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg font-sans font-medium text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 tracking-wide"
            >
              <div className="relative flex items-center justify-center space-x-2">
                <span>Join Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group px-8 py-4 border border-yellow-600/50 rounded-lg font-sans font-medium text-lg hover:bg-yellow-600/10 backdrop-blur-sm transition-all duration-300 tracking-wide"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Portfolio</span>
                <Play className="w-5 h-5" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
            {[
              { number: '5+', label: 'Active Sectors', icon: Target },
              { number: '100+', label: 'Team Members', icon: Users },
              { number: '₦450K', label: 'Top Salary', icon: Zap }
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
                  <div className="text-2xl font-serif font-normal mb-2 text-gray-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-sans font-light tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-700/10 border border-gray-600/30 rounded-full text-gray-400 text-sm font-sans font-medium tracking-wider mb-6">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Pioneering <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Growth</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light leading-relaxed tracking-wide">
              Building diversified portfolios that drive sustainable returns and create meaningful opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black/80 border border-gray-600/30 rounded-2xl p-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 font-sans font-light tracking-wide">
                    <span className="text-2xl font-serif font-normal text-yellow-400 block mb-4">MBAS Investment Limited</span>
                    is a diversified investment powerhouse engaged in both private and government contracts across multiple high-growth sectors.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed font-sans font-light tracking-wide">
                    We combine strategic vision with operational excellence, leveraging cutting-edge technology and innovative partnerships to reshape industries and deliver exceptional value.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, title: 'Excellence', desc: 'Uncompromising quality in everything' },
                  { icon: Users, title: 'Partnership', desc: 'Collaborative growth approach' },
                  { icon: TrendingUp, title: 'Growth', desc: 'Sustainable long-term returns' },
                  { icon: Globe, title: 'Global', desc: 'International reach & impact' }
                ].map((value, idx) => (
                  <div key={idx} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="relative bg-black/60 backdrop-blur-sm border border-gray-600/20 rounded-lg p-5 hover:border-yellow-500/50 transition-all duration-300">
                      <value.icon className="w-7 h-7 text-yellow-400 mb-3" />
                      <h3 className="text-base font-sans font-medium mb-1 tracking-wide">{value.title}</h3>
                      <p className="text-xs text-gray-400 font-sans font-light tracking-wide">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-yellow-400/20 to-yellow-600/20 rounded-3xl blur-3xl animate-pulse-slow" />
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-600/20 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                  alt="Business Strategy"
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-normal mb-4 text-yellow-400">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed font-sans font-light tracking-wide">
                    To create sustainable wealth through strategic investments while empowering individuals and communities through innovative opportunities in education and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-black via-gray-900/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-700/10 border border-gray-600/30 rounded-full text-gray-400 text-sm font-sans font-medium tracking-wider mb-6">
              OUR INVESTMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Investment <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Sectors</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light tracking-wide">
              Diversified portfolio across high-growth industries driving the future economy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-60 transition duration-500`} />
                <div className="relative h-full bg-black/80 border border-gray-600/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-500">
                  <div className={`inline-flex w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <sector.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-serif font-normal mb-4 tracking-tight">{sector.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 font-sans font-light tracking-wide text-sm">{sector.description}</p>
                  
                  <div className="space-y-2">
                    {sector.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-gray-400 font-sans font-light">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-700/10 border border-gray-600/30 rounded-full text-gray-400 text-sm font-sans font-medium tracking-wider mb-6">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Project <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light tracking-wide">
              Explore our diverse range of successful investments and completed projects
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative group mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl overflow-hidden">
              <div className="relative h-[400px] md:h-[500px]">
                <img 
                  src={portfolioItems[activeCarousel].image}
                  alt={portfolioItems[activeCarousel].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-sans font-medium tracking-wide mb-4">
                    {portfolioItems[activeCarousel].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-normal mb-4 tracking-tight">{portfolioItems[activeCarousel].title}</h3>
                  <p className="text-lg text-gray-300 mb-6 max-w-3xl font-sans font-light leading-relaxed">{portfolioItems[activeCarousel].description}</p>
                  
                  <a
                    href={portfolioItems[activeCarousel].link}
                    className="group/btn inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg font-sans font-medium hover:scale-105 transition-all duration-300 tracking-wide"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <button
                onClick={prevCarousel}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm border border-gray-600/30 rounded-full flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextCarousel}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm border border-gray-600/30 rounded-full flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {portfolioItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCarousel(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeCarousel ? 'bg-yellow-400 w-6 h-1.5' : 'bg-gray-600 w-1.5 h-1.5 hover:bg-yellow-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveCarousel(idx)}
                className="group relative overflow-hidden rounded-xl text-left"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                <div className="relative h-64 bg-black border border-gray-600/20 rounded-xl overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs text-yellow-400 font-sans font-medium tracking-wide">{item.category}</span>
                    <h4 className="text-base font-serif font-normal mt-2 line-clamp-2 leading-snug">{item.title}</h4>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-black via-gray-900/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-700/10 border border-gray-600/30 rounded-full text-gray-400 text-sm font-sans font-medium tracking-wider mb-6">
              NOW HIRING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Join Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Dream Team</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light tracking-wide">
              Be part of an innovative education revolution with competitive compensation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Job Details */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 md:p-10">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-normal mb-2 tracking-tight">English Tutor</h3>
                    <p className="text-gray-400 font-sans font-medium tracking-wide">Full-time & Part-time Positions</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 font-sans font-light tracking-wide">
                  Join our partnership with <span className="text-yellow-400 font-sans font-medium">SLING English Education</span> and teach Chinese students using cutting-edge AI-driven learning platforms. Experience cultural exchange while working with innovative technology.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { emoji: '💰', title: 'Salary Range', value: '₦350K - ₦450K', desc: 'Monthly pay' },
                    { emoji: '⚡', title: 'Bonuses', value: 'Extra Income', desc: 'Performance based' },
                    { emoji: '🎯', title: 'Flexibility', value: 'Your Schedule', desc: 'Part/Full-time' },
                    { emoji: '🤖', title: 'AI Platform', value: 'Cutting-Edge', desc: 'Modern tools' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="relative bg-black/40 border border-gray-600/20 rounded-lg p-5 group-hover:border-yellow-500/50 transition-all duration-300">
                        <div className="text-2xl mb-2">{benefit.emoji}</div>
                        <div className="text-xs text-gray-400 font-sans font-medium mb-1 tracking-wide">{benefit.title}</div>
                        <div className="text-base font-sans font-medium text-yellow-400 mb-0.5">{benefit.value}</div>
                        <div className="text-xs text-gray-500 font-sans font-light">{benefit.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-black/40 border border-gray-600/20 rounded-xl p-6 mb-8">
                  <h4 className="text-base font-sans font-medium mb-3 flex items-center tracking-wide">
                    <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                    Additional Benefits
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-400 font-sans font-light">
                    {['Professional development', 'Cultural exchange', 'Remote work', 'Career growth'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="YOUR_ZOHO_FORM_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg font-sans font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 tracking-wide"
                >
                  <span className="relative flex items-center space-x-2">
                    <span>Apply Now</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </a>
                <p className="text-sm text-gray-500 text-center mt-3 font-sans font-light">Application takes ~5 minutes</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-center space-x-2 mb-8">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-xl font-serif font-normal tracking-tight">What Our Tutors Say</h3>
                </div>

                <div className="flex-1 flex flex-col justify-center mb-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src={testimonials[testimonialIndex].image}
                      alt={testimonials[testimonialIndex].name}
                      className="w-14 h-14 rounded-full border border-yellow-500/50 object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-lg font-serif font-normal mb-1">{testimonials[testimonialIndex].name}</h4>
                      <p className="text-gray-400 text-sm font-sans font-light">{testimonials[testimonialIndex].role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-sans font-light italic tracking-wide">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                </div>

                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="w-9 h-9 bg-black/50 border border-gray-600/30 rounded-full flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTestimonialIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          idx === testimonialIndex ? 'bg-yellow-400 w-6 h-1.5' : 'bg-gray-600 w-1.5 h-1.5 hover:bg-yellow-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                    className="w-9 h-9 bg-black/50 border border-gray-600/30 rounded-full flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-700/10 border border-gray-600/30 rounded-full text-gray-400 text-sm font-sans font-medium tracking-wider mb-6">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Got <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Questions?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-sans font-light tracking-wide">
              Everything you need to know about MBAS and our opportunities
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl blur opacity-0 transition duration-500 ${openAccordion === idx ? 'opacity-25' : 'group-hover:opacity-20'}`} />
                <div className={`relative bg-black/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                  openAccordion === idx ? 'border-yellow-500/50' : 'border-gray-600/20 hover:border-yellow-500/40'
                }`}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className="text-base md:text-lg font-sans font-medium pr-4 tracking-wide">{faq.question}</span>
                    <div className={`flex-shrink-0 w-7 h-7 bg-yellow-500/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openAccordion === idx ? 'rotate-180 bg-yellow-500/40' : ''
                    }`}>
                      {openAccordion === idx ? (
                        <Minus className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <Plus className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 md:px-8 pb-6 text-gray-400 leading-relaxed font-sans font-light tracking-wide">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-black via-gray-900/5 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-700/10 border border-gray-600/30 rounded-full text-gray-400 text-sm font-sans font-medium tracking-wider mb-6">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight">
              Let's <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-sans font-light tracking-wide">
              Have questions? We're here to help
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a href="mailto:info@mbasinvestment.com" className="group/item relative overflow-hidden block">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-black/40 border border-gray-600/20 rounded-xl p-6 group-hover/item:border-yellow-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-sans font-medium mb-1 tracking-wide">Email Us</h3>
                    <p className="text-sm text-gray-400 mb-2 font-sans font-light">Get in touch via email</p>
                    <p className="text-yellow-400 font-sans font-medium flex items-center space-x-2 tracking-wide">
                      <span>info@mbasinvestment.com</span>
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </a>

                <a href="tel:+234XXXXXXXXX" className="group/item relative overflow-hidden block">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-black/40 border border-gray-600/20 rounded-xl p-6 group-hover/item:border-yellow-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-sans font-medium mb-1 tracking-wide">Call Us</h3>
                    <p className="text-sm text-gray-400 mb-2 font-sans font-light">Speak with our team</p>
                    <p className="text-yellow-400 font-sans font-medium flex items-center space-x-2 tracking-wide">
                      <span>+234 XXX XXX XXXX</span>
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-r from-yellow-600/10 via-yellow-500/10 to-yellow-400/10 border border-gray-600/20 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-medium mb-1 tracking-wide">Office Location</h4>
                    <p className="text-gray-400 font-sans font-light">Abuja, Federal Capital Territory, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>

      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}