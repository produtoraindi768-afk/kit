import React from 'react';
import { Star, Award, Target } from 'lucide-react';

const Players = () => {
  const players = [
    {
      name: "Alex 'Phoenix' Chen",
      role: "Team Captain",
      game: "Counter-Strike 2",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 4.9,
      achievements: 15,
      winRate: "87%"
    },
    {
      name: "Sarah 'Viper' Johnson",
      role: "IGL",
      game: "Valorant",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 4.8,
      achievements: 12,
      winRate: "91%"
    },
    {
      name: "Marcus 'Shadow' Williams",
      role: "Mid Laner",
      game: "League of Legends",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 4.7,
      achievements: 18,
      winRate: "84%"
    },
    {
      name: "Emma 'Rocket' Davis",
      role: "Striker",
      game: "Rocket League",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      rating: 4.9,
      achievements: 10,
      winRate: "89%"
    }
  ];

  return (
    <section id="players" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-accent mb-4">Meet Our Champions</h6>
          <h2 className="mb-6">Elite Gaming Professionals</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our roster features some of the most skilled and dedicated players in the esports world, 
            each bringing unique talents and championship experience to Knight Gaming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <div key={index} className="bg-dark-300 rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-primary mb-1">{player.name}</h4>
                  <p className="text-secondary text-sm font-semibold">{player.role}</p>
                  <p className="text-gray-400 text-xs">{player.game}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="text-yellow-500" size={16} />
                    </div>
                    <div className="text-lg font-bold text-primary">{player.rating}</div>
                    <div className="text-xs text-gray-400 uppercase">Rating</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Award className="text-secondary" size={16} />
                    </div>
                    <div className="text-lg font-bold text-primary">{player.achievements}</div>
                    <div className="text-xs text-gray-400 uppercase">Awards</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Target className="text-green-500" size={16} />
                    </div>
                    <div className="text-lg font-bold text-primary">{player.winRate}</div>
                    <div className="text-xs text-gray-400 uppercase">Win Rate</div>
                  </div>
                </div>
                
                <button className="w-full bg-secondary/20 text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary transition-all duration-300 font-bold uppercase text-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;