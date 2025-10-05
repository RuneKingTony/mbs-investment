import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Building2, GraduationCap, Globe, ChevronRight, Users, Award, Briefcase, Sparkles, Zap, Target, ArrowRight, ChevronLeft, Plus, Minus, ExternalLink, Play, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

export default function MBASInvestment() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [slingModalOpen, setSlingModalOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      description: 'Premium 50-unit residential development in Abuja with modern amenities and sustainable design',
      status: 'coming soon'
    },
    {
      id: 2,
      title: 'Commercial Plaza Development',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      description: 'State-of-the-art commercial space in prime business district with smart building technology',
      status: 'coming soon'
    },
    {
      id: 3,
      title: 'Investment Portfolio Growth',
      category: 'Financial Markets',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
      description: 'Diversified stock and crypto portfolio delivering consistent returns',
      status: 'coming soon'
    },
    {
      id: 4,
      title: 'SLING Education Platform',
      category: 'Education Tech',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop',
      description: 'AI-powered English learning platform connecting students with expert tutors globally',
      status: 'active'
    }
  ];

  const FAQS = [
    {
      question: 'What are the specific requirements to become an English tutor?',
      answer: 'We require English proficiency demonstrated through either: WASSCE (minimum C4), NECO (minimum B), UTME (250+), or international certificates like IELTS (6.0+), TOEFL (85+), or Cambridge C1. Additionally, we look for professional ethics including respect for Chinese culture, clear communication skills, responsibility, and punctuality.'
    },
    {
      question: 'How flexible is the work schedule for tutors?',
      answer: 'Very flexible! This is a fully remote part-time position where you can work from home at your convenience. You just need a computer and stable internet (≥ 50Mbps). You can choose hours that work best for you while maintaining a quiet workspace for teaching.'
    },
    {
      question: 'What equipment do I need to start teaching?',
      answer: 'You need a computer (Windows or Mac), stable internet connection with at least 50Mbps speed, and a quiet workspace. Our teaching platform is web-based and works on any modern browser. We provide all teaching materials and training.'
    },
    {
      question: 'What is the hiring process for English tutors?',
      answer: 'Our hiring process is straightforward: 1) Resume Screening → 2) Online Demo → 3) Training → 4) Contract & Onboarding. The entire process is designed to be efficient and help you start teaching as soon as possible.'
    },
    {
      question: 'What teaching approach does MBAS use?',
      answer: 'We focus on creating a pure English-speaking environment while integrating Nigerian culture into lessons. Our tutors use interactive methods to boost student engagement and support students in overcoming learning anxiety. We provide access to training and an intelligent teaching platform to enhance your teaching experience.'
    },
    {
      question: 'What makes MBAS different from other tutoring companies?',
      answer: 'MBAS Investment Limited combines education with strategic partnerships and trading ventures. We are a forward-thinking Nigerian company dedicated to creating value through education while connecting Nigeria to international markets. Our tutors benefit from professional growth opportunities and global exposure.'
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Simple carousel effect that stops when modal is open
  useEffect(() => {
    if (slingModalOpen) return;
    
    const interval = setInterval(() => {
      setActiveCarousel(prev => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slingModalOpen, portfolioItems.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const nextCarousel = () => setActiveCarousel((prev) => (prev + 1) % portfolioItems.length);
  const prevCarousel = () => setActiveCarousel((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  const openSlingModal = () => {
    setSlingModalOpen(true);
  };

  const closeSlingModal = () => {
    setSlingModalOpen(false);
  };

  // Fixed Apply Now function
  const handleApplyNow = () => {
    window.open('https://forms.zohopublic.com/anchorfitng1/form/RecruitmentForm/formperma/y3LpDxfwkExQg2gh_pnYHuf5CjToKESExIH88j5om38', '_blank', 'noopener,noreferrer');
  };

  const Footer = () => (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative w-28 h-28 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
                    <img 
                      src="/MBA.png"
                      alt="MBAS Investment Limited"
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                </div>
              </button>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering visionary entrepreneurs and innovative companies to transform emerging markets through strategic capital and operational excellence.
            </p>
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
                <a href="mailto:mbasinvestmentitd@gmail.com" className="hover:text-yellow-500 transition-colors">
                  mbasinvestmentitd@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <a href="tel:+2348144090991" className="hover:text-yellow-500 transition-colors">
                  +234 814 409 0991
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>7th floor, labour house, Mohammadu buhari way, Central Business District, Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 MBAS Investment Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  const SlingModal = () => {
    if (!slingModalOpen) return null;
    
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          onClick={closeSlingModal}
        />
        
        {/* Modal Content */}
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 p-6 border-b border-yellow-500/20 bg-gradient-to-r from-yellow-600/10 to-yellow-500/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-normal text-white">SLING Education</h2>
                  <p className="text-yellow-400 font-sans font-medium">Active Project · Education Technology</p>
                </div>
              </div>
              <button
                onClick={closeSlingModal}
                className="w-10 h-10 bg-black/50 border border-gray-600/30 rounded-xl flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid lg:grid-cols-2 gap-6 p-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
                    alt="SLING Education Platform"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-sans font-medium">
                      Active & Hiring
                    </span>
                  </div>
                </div>

                <div className="bg-black/40 border border-gray-600/20 rounded-2xl p-6">
                  <h3 className="text-xl font-serif font-normal mb-4 text-yellow-400">Platform Features</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'AI-Powered Learning Assistant',
                      'Real-time Pronunciation Analysis',
                      'Interactive Lesson Plans',
                      'Cultural Exchange Integration',
                      'Progress Tracking Dashboard',
                      'Multi-platform Compatibility'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-300 font-sans font-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-normal mb-4 text-white">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-4 font-sans font-light text-sm">
                    SLING Education represents our commitment to revolutionizing language learning through cutting-edge technology. 
                    This AI-powered platform connects Chinese students with qualified English tutors from Nigeria, creating a unique 
                    cultural exchange while delivering high-quality education.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4 font-sans font-light text-sm">
                    Our platform leverages advanced machine learning algorithms to provide real-time feedback on pronunciation, 
                    grammar, and fluency, ensuring students receive personalized attention and measurable progress.
                  </p>
                </div>

                <div className="bg-black/40 border border-gray-600/20 rounded-2xl p-6">
                  <h3 className="text-xl font-serif font-normal mb-4 text-yellow-400">Key Achievements</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { number: '500+', label: 'Active Students' },
                      { number: '50+', label: 'Expert Tutors' },
                      { number: '98%', label: 'Satisfaction Rate' },
                      { number: '24/7', label: 'Platform Availability' }
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-serif font-normal text-yellow-400 mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-400 font-sans font-light">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-serif font-normal mb-3 text-yellow-400">Join Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed mb-4 font-sans font-light text-sm">
                    We're looking for passionate English tutors to join our growing community. If you're dedicated to making a 
                    difference in students' lives while embracing cultural exchange, we'd love to have you on board.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        closeSlingModal();
                        setTimeout(() => scrollToSection('careers'), 100);
                      }}
                      className="flex-1 px-4 py-3 border border-yellow-500/50 rounded-lg font-sans font-medium hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>View Careers</span>
                    </button>
                    <button
                      onClick={handleApplyNow}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg font-sans font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <span>Apply Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative font-sans">
      {/* SLING Education Modal */}
      <SlingModal />

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
          animation: slingModalOpen ? 'none' : 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-gray-700/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-28 h-28 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/MBA.png"
                    alt="MBAS Investment Limited"
                    className="w-full h-full object-contain p-3"
                  />
                </div>
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
              { number: 'Flexible', label: 'Work Hours', icon: Zap }
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
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-sans font-medium tracking-wide">
                      {portfolioItems[activeCarousel].category}
                    </span>
                    {portfolioItems[activeCarousel].status === 'coming soon' && (
                      <span className="inline-block px-3 py-1 bg-gray-600/50 border border-gray-500/30 rounded-full text-gray-400 text-sm font-sans font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-normal mb-4 tracking-tight">{portfolioItems[activeCarousel].title}</h3>
                  <p className="text-lg text-gray-300 mb-6 max-w-3xl font-sans font-light leading-relaxed">{portfolioItems[activeCarousel].description}</p>
                  
                  {portfolioItems[activeCarousel].id === 4 ? (
                    <button
                      onClick={openSlingModal}
                      className="group/btn inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg font-sans font-medium hover:scale-105 transition-all duration-300 tracking-wide"
                    >
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600/50 border border-gray-500/30 rounded-lg font-sans font-medium text-gray-400 cursor-not-allowed">
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Transparent Arrows */}
              <button
                onClick={prevCarousel}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm border border-gray-600/10 rounded-full flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCarousel}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm border border-gray-600/10 rounded-full flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
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
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                <div className="relative h-64 bg-black border border-gray-600/20 rounded-xl overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-yellow-400 font-sans font-medium tracking-wide">{item.category}</span>
                      {item.status === 'coming soon' && (
                        <span className="text-xs text-gray-400 font-sans font-medium bg-gray-600/50 px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-serif font-normal line-clamp-2 leading-snug">{item.title}</h4>
                  </div>
                  {item.status === 'coming soon' && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-sans font-medium text-lg">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
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
              Online English <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-normal">Tutors</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-sans font-light tracking-wide">
              Join our team of expert English tutors and teach students from around the world
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
                    <h3 className="text-2xl font-serif font-normal mb-2 tracking-tight">Online English Tutor</h3>
                    <p className="text-gray-400 font-sans font-medium tracking-wide">Nigeria · Flexible Part-Time</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { icon: '🏠', title: 'Fully Remote', desc: 'Teach from home with just a computer and stable internet' },
                    { icon: '⏰', title: 'Flexible Hours', desc: 'Work at your convenience' },
                    { icon: '📈', title: 'Growth Opportunities', desc: 'Access to training and intelligent teaching platform' }
                  ].map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-black/40 border border-gray-600/20 rounded-lg">
                      <span className="text-2xl">{highlight.icon}</span>
                      <div>
                        <h4 className="font-sans font-medium text-yellow-400 mb-1">{highlight.title}</h4>
                        <p className="text-sm text-gray-400 font-sans font-light">{highlight.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="text-lg font-sans font-medium mb-4 flex items-center">
                    <Target className="w-5 h-5 text-yellow-400 mr-2" />
                    Requirements
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-gray-300 font-sans font-medium">English Proficiency:</span>
                        <p className="text-sm text-gray-400 font-sans font-light">
                          WASSCE (min C4), NECO (min B), UTME (250+), or international certificates (IELTS 6.0+, TOEFL 85+, Cambridge C1)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-gray-300 font-sans font-medium">Professional Ethics:</span>
                        <p className="text-sm text-gray-400 font-sans font-light">
                          Respect for Chinese culture, clear communication, responsibility, and punctuality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-lg font-sans font-medium mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 text-yellow-400 mr-2" />
                    Responsibilities
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Provide a pure English-speaking environment',
                      'Integrate Nigerian culture into lessons',
                      'Use interactive methods to boost engagement',
                      'Support students in overcoming learning anxiety'
                    ].map((responsibility, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                        <span>{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div className="mb-8">
                  <h4 className="text-lg font-sans font-medium mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                    Equipment Needed
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: '💻', item: 'Computer', spec: 'Windows/Mac' },
                      { icon: '🌐', item: 'Internet', spec: '≥ 50Mbps' },
                      { icon: '🔇', item: 'Workspace', spec: 'Quiet environment' }
                    ].map((equip, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-black/40 border border-gray-600/20 rounded-lg">
                        <span className="text-xl">{equip.icon}</span>
                        <div>
                          <div className="text-sm font-sans font-medium text-gray-300">{equip.item}</div>
                          <div className="text-xs text-gray-500 font-sans font-light">{equip.spec}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hiring Process */}
                <div className="mb-8">
                  <h4 className="text-lg font-sans font-medium mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                    Hiring Process
                  </h4>
                  <div className="flex items-center justify-between relative">
                    {[
                      { step: '1', label: 'Resume Screening' },
                      { step: '2', label: 'Online Demo' },
                      { step: '3', label: 'Training' },
                      { step: '4', label: 'Contract & Onboarding' }
                    ].map((process, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mb-2">
                          <span className="text-sm font-sans font-bold text-white">{process.step}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-sans font-light max-w-20">{process.label}</span>
                      </div>
                    ))}
                    <div className="absolute top-5 left-10 right-10 h-0.5 bg-gray-600/50 -z-10" />
                  </div>
                </div>

                <a
                  href="https://forms.zohopublic.com/anchorfitng1/form/RecruitmentForm/formperma/y3LpDxfwkExQg2gh_pnYHuf5CjToKESExIH88j5om38"
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

            {/* About MBAS Section */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center space-x-2 mb-6">
                  <Building2 className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-xl font-serif font-normal tracking-tight">About MBAS Investment</h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed font-sans font-light tracking-wide">
                  <p>
                    MBAS Investment Limited is a forward-thinking Nigerian company dedicated to creating value through education, trading, and strategic partnerships. We believe growth comes from both knowledge and enterprise.
                  </p>
                  <p>
                    Through our tutoring programs, we recruit and develop skilled English tutors who deliver engaging online learning experiences to international students. These initiatives promote effective communication and cultural exchange while opening doors for professional growth.
                  </p>
                  <p>
                    At MBAS, our mission is simple: to bridge people, knowledge, and opportunities, empowering individuals and businesses to grow with confidence.
                  </p>
                </div>

                {/* Additional Benefits */}
                <div className="mt-8 bg-black/40 border border-gray-600/20 rounded-xl p-6">
                  <h4 className="text-lg font-sans font-medium mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                    Why Join MBAS?
                  </h4>
                  <div className="grid grid-cols-1 gap-3 text-sm text-gray-400 font-sans font-light">
                    {[
                      'Professional development opportunities',
                      'Cultural exchange experience',
                      'Flexible remote work',
                      'Career growth potential',
                      'Modern teaching platform',
                      'Supportive team environment'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
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
              Everything you need to know about MBAS and our tutoring opportunities
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
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
                <a href="mailto:mbasinvestmentitd@gmail.com" className="group/item relative overflow-hidden block">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-black/40 border border-gray-600/20 rounded-xl p-6 group-hover/item:border-yellow-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-sans font-medium mb-1 tracking-wide">Email Us</h3>
                    <p className="text-sm text-gray-400 mb-2 font-sans font-light">Get in touch via email</p>
                    <p className="text-yellow-400 font-sans font-medium flex items-center space-x-2 tracking-wide">
                      <span>mbasinvestmentitd@gmail.com</span>
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </a>

                <a href="tel:+2348144090991" className="group/item relative overflow-hidden block">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-black/40 border border-gray-600/20 rounded-xl p-6 group-hover/item:border-yellow-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-sans font-medium mb-1 tracking-wide">Call Us</h3>
                    <p className="text-sm text-gray-400 mb-2 font-sans font-light">Speak with our team</p>
                    <p className="text-yellow-400 font-sans font-medium flex items-center space-x-2 tracking-wide">
                      <span>+234 814 409 0991</span>
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
                    <p className="text-gray-400 font-sans font-light">7th floor, labour house, Mohammadu buhari way, Central Business District, Abuja, Nigeria</p>
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