import { ExternalLink, Users, Trophy } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Counter-Strike 2",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      players: 12,
      tournaments: 8,
      rank: "#3 Global",
      description: "Our CS2 team dominates the competitive scene with tactical precision and exceptional teamwork."
    },
    {
      title: "Valorant",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      players: 10,
      tournaments: 12,
      rank: "#1 Regional",
      description: "Leading the charge in tactical FPS gaming with our championship-winning Valorant roster."
    },
    {
      title: "League of Legends",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      players: 15,
      tournaments: 6,
      rank: "#5 Global",
      description: "Strategic MOBA gameplay at its finest with our experienced League of Legends champions."
    },
    {
      title: "Rocket League",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      players: 9,
      tournaments: 10,
      rank: "#2 Regional",
      description: "High-octane car soccer action with precision plays and incredible aerial maneuvers."
    }
  ];

  return (
    <section id="games" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-accent mb-4">Our Gaming Portfolio</h6>
          <h2 className="mb-6">Competitive Games We Dominate</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From tactical shooters to strategic MOBAs, our teams excel across multiple gaming titles, 
            consistently ranking among the world's best players and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-dark-300 rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-primary">{game.rank}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h4 className="text-xl group-hover:text-secondary transition-colors duration-300">
                  {game.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {game.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users size={16} />
                    <span>{game.players} Players</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Trophy size={16} />
                    <span>{game.tournaments} Wins</span>
                  </div>
                </div>
                
                <button className="w-full bg-secondary/20 text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 font-bold uppercase text-sm">
                  View Team
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;