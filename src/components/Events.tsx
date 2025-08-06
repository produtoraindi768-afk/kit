import React from 'react';
import { Calendar, MapPin, Trophy, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Knight Gaming Championship 2024",
      date: "March 15-17, 2024",
      time: "18:00 GMT",
      location: "Los Angeles Convention Center",
      game: "Counter-Strike 2",
      prize: "$50,000",
      status: "upcoming",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "Valorant Masters Qualifier",
      date: "February 28, 2024",
      time: "20:00 GMT",
      location: "Online Tournament",
      game: "Valorant",
      prize: "$25,000",
      status: "live",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "League of Legends World Cup",
      date: "January 20, 2024",
      time: "16:00 GMT",
      location: "Seoul, South Korea",
      game: "League of Legends",
      prize: "$100,000",
      status: "completed",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500';
      case 'upcoming': return 'bg-yellow-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'LIVE NOW';
      case 'upcoming': return 'UPCOMING';
      case 'completed': return 'COMPLETED';
      default: return 'TBD';
    }
  };

  return (
    <section id="events" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-accent mb-4">Tournament Schedule</h6>
          <h2 className="mb-6">Upcoming Events & Tournaments</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest tournament participations, championship events, 
            and competitive matches across all gaming titles.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-dark-300 rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-100/50"></div>
                  <div className={`absolute top-4 left-4 ${getStatusColor(event.status)} px-3 py-1 rounded-full`}>
                    <span className="text-xs font-bold text-white">{getStatusText(event.status)}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                        {event.game}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-secondary flex-shrink-0" size={20} />
                        <div>
                          <div className="font-semibold">{event.date}</div>
                          <div className="text-sm text-gray-400">{event.time}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="text-secondary flex-shrink-0" size={20} />
                        <div>
                          <div className="font-semibold">{event.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Trophy className="text-secondary flex-shrink-0" size={20} />
                        <div>
                          <div className="font-semibold">Prize Pool</div>
                          <div className="text-sm text-gray-400">{event.prize}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="text-secondary flex-shrink-0" size={20} />
                        <div>
                          <div className="font-semibold">Status</div>
                          <div className="text-sm text-gray-400">{getStatusText(event.status)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    {event.status === 'live' && (
                      <button className="btn-primary">Watch Live</button>
                    )}
                    {event.status === 'upcoming' && (
                      <button className="btn-primary">Register Now</button>
                    )}
                    {event.status === 'completed' && (
                      <button className="border-2 border-secondary text-primary px-8 py-3 hover:bg-secondary hover:text-dark-100 transition-all duration-300 font-bold uppercase text-sm">
                        View Results
                      </button>
                    )}
                    <button className="border-2 border-secondary text-primary px-8 py-3 hover:bg-secondary hover:text-dark-100 transition-all duration-300 font-bold uppercase text-sm">
                      Event Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;