import React from 'react';
import { Play, Users, Trophy, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-100/90 via-dark-100/70 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h6 className="text-accent">Welcome to Knight Gaming</h6>
              <h1 className="leading-tight">
                Elite Gaming
                <span className="block text-secondary">Champions</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Join the most prestigious gaming clan where legends are born. 
                Experience competitive gaming at its finest with our elite team of professional players.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                <Play size={18} />
                Watch Highlights
              </button>
              <button className="border-2 border-secondary text-primary px-8 py-3 hover:bg-secondary hover:text-dark-100 transition-all duration-300 font-bold uppercase text-sm">
                Join Clan
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-secondary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-gray-400 uppercase">Members</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Trophy className="text-secondary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">45</div>
                <div className="text-sm text-gray-400 uppercase">Tournaments Won</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="text-secondary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-gray-400 uppercase">Years Active</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-dark-100">#</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">#1</div>
                <div className="text-sm text-gray-400 uppercase">Global Rank</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1" 
                alt="Gaming Setup" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/50 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-secondary p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">LIVE</div>
                <div className="text-xs text-primary uppercase">Streaming</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-dark-300 p-4 rounded-lg shadow-lg border border-secondary/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-bold text-primary">Online Now</div>
                  <div className="text-xs text-gray-400">89 players active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;