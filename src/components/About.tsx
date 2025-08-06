import { Shield, Target, Zap, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Elite Training",
      description: "Professional coaching and advanced training programs to elevate your gaming skills to championship level."
    },
    {
      icon: Target,
      title: "Competitive Focus",
      description: "Participate in major tournaments and leagues with our dedicated competitive gaming teams."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Access to the latest gaming hardware and software to ensure peak performance in every match."
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "Join a clan with a track record of victories and championships across multiple gaming titles."
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h6 className="text-accent">About Knight Gaming</h6>
              <h2>The Ultimate Gaming Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2016, Knight Gaming has established itself as one of the premier esports organizations 
                in the world. Our commitment to excellence, teamwork, and innovation has led us to victory in 
                countless tournaments across multiple gaming titles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe in nurturing talent, building lasting friendships, and creating unforgettable gaming 
                experiences. Whether you're a casual player or aspiring professional, Knight Gaming provides 
                the platform to achieve your gaming dreams.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Join Our Clan</button>
              <button className="border-2 border-secondary text-primary px-8 py-3 hover:bg-secondary hover:text-dark-100 transition-all duration-300 font-bold uppercase text-sm">
                View Achievements
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-dark-300 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors duration-300">
                    <feature.icon className="text-secondary" size={24} />
                  </div>
                  <h4 className="text-lg">{feature.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;