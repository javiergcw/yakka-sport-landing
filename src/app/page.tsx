'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen py-1 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full border-4 border-white shadow-2xl mb-6 animate-bounce-slow">
            <span className="text-white text-3xl font-bold">Y</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
            YAKKA
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 tracking-wide">
            SPORT
          </h2>
        </div>

        {/* Coming Soon Text */}
        <div className="mb-12 animate-fade-in-up delay-300">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Something Amazing is
            <span className="text-green-500 block mt-2 animate-pulse">Coming Soon</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're working hard to bring you the ultimate sports experience. 
            Get ready for something revolutionary in the world of sports.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up delay-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-12 animate-fade-in-up delay-700">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500/20"
                >
                  Notify Me
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full px-8 py-4 text-green-800 dark:text-green-200 font-medium animate-fade-in">
              ✅ Thank you! We'll notify you when we launch.
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up delay-1000">
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
            Follow us for updates
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Twitter', icon: '𝕏', href: '#' },
              { name: 'Instagram', icon: '📷', href: '#' },
              { name: 'Facebook', icon: '📘', href: '#' },
              { name: 'LinkedIn', icon: '💼', href: '#' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-700"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
