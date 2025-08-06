import { ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    {
      name: "TechGear Pro",
      logo: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
      category: "Gaming Hardware",
      description: "Premium gaming peripherals and hardware solutions for professional esports."
    },
    {
      name: "StreamMax",
      logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
      category: "Streaming Platform",
      description: "Leading streaming and content creation platform for gamers worldwide."
    },
    {
      name: "EnergyBoost",
      logo: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
      category: "Energy Drinks",
      description: "Premium energy drinks designed specifically for competitive gaming performance."
    },
    {
      name: "GameChair Elite",
      logo: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
      category: "Gaming Furniture",
      description: "Ergonomic gaming chairs and furniture for optimal comfort during long sessions."
    },
    {
      name: "CloudNet",
      logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
      category: "Internet Services",
      description: "Ultra-fast internet and networking solutions for competitive gaming."
    },
    {
      name: "ProGaming Academy",
      logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
      category: "Education",
      description: "Professional gaming training and educational programs for aspiring esports athletes."
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-accent mb-4">Our Partners</h6>
          <h2 className="mb-6">Trusted Sponsors & Partners</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to partner with industry-leading brands that share our commitment to 
            excellence in competitive gaming and esports innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-dark-300 rounded-lg p-6 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-6 h-20">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {sponsor.name}
                </h4>
                <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {sponsor.category}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {sponsor.description}
                </p>
                <button className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors duration-300 mx-auto">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-dark-300 rounded-lg p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Become a Partner</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our growing network of sponsors and partners. Connect with our passionate gaming 
              community and support the future of competitive esports.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Partnership Inquiry</button>
              <button className="border-2 border-secondary text-primary px-8 py-3 hover:bg-secondary hover:text-dark-100 transition-all duration-300 font-bold uppercase text-sm">
                Sponsorship Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;