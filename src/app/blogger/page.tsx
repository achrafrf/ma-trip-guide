import Link from 'next/link';
import { ArrowLeft, PenTool, Calendar, User } from 'lucide-react';
import Header from '@/components/sections/header';

export default function BloggerPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Découvrir les merveilles du Maroc",
      excerpt: "Le Maroc est un pays aux mille facettes, où se mêlent tradition et modernité. Des souks colorés de Marrakech aux dunes du Sahara...",
      author: "Ahmed El Fassi",
      date: "15 Nov 2025",
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
      category: "Culture"
    },
    {
      id: 2,
      title: "Les trésors cachés de l'Atlas",
      excerpt: "L'Atlas marocain recèle de villages berbères authentiques et de paysages à couper le souffle. Partez à la découverte...",
      author: "Fatima Zahra",
      date: "10 Nov 2025",
      image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=800&q=80",
      category: "Nature"
    },
    {
      id: 3,
      title: "Gastronomie marocaine: un voyage des sens",
      excerpt: "La cuisine marocaine est reconnue mondialement pour ses saveurs uniques. Du tajine au couscous, chaque plat raconte une histoire...",
      author: "Youssef Benani",
      date: "5 Nov 2025",
      image: "https://images.unsplash.com/photo-1601307500029-6e79ec552a5d?w=800&q=80",
      category: "Cuisine"
    },
    {
      id: 4,
      title: "Les plages du Maroc: entre Atlantique et Méditerranée",
      excerpt: "Le littoral marocain offre une diversité étonnante, des plages de surf d'Essaouira aux criques tranquilles du Nord...",
      author: "Laila Mansouri",
      date: "1 Nov 2025",
      image: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80",
      category: "Voyage"
    },
    {
      id: 5,
      title: "L'artisanat marocain: savoir-faire ancestral",
      excerpt: "De la poterie de Fès aux tapis berbères, l'artisanat marocain perpétue des traditions millénaires...",
      author: "Hassan Benjelloun",
      date: "28 Oct 2025",
      image: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=800&q=80",
      category: "Artisanat"
    },
    {
      id: 6,
      title: "Marrakech: la ville rouge qui ne dort jamais",
      excerpt: "Entre ses jardins luxuriants, ses palais somptueux et ses souks animés, Marrakech fascine et enchante...",
      author: "Samira Alami",
      date: "22 Oct 2025",
      image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
      category: "Destinations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB] to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#2D5016] hover:text-[#4A7C2C] transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour à l'accueil</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PenTool className="w-8 h-8 text-[#2D5016]" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D5016]">
              Blog MA TRIP GUIDE
            </h1>
          </div>
          <p className="text-xl text-[#78716C] max-w-2xl mx-auto">
            Découvrez nos articles sur le Maroc, ses merveilles naturelles, sa culture riche et ses destinations incontournables
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#B8BCC2] shadow-sm mb-12" />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-105 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-[#2D5016] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#2D5016] mb-3 line-clamp-2 hover:text-[#4A7C2C] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-sm text-[#6B7280] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-[#6B7280] pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <PenTool className="w-12 h-12 text-[#4A7C2C] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#2D5016] mb-3">
            Plus d'articles à venir
          </h3>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Restez connectés pour découvrir de nouveaux articles sur les destinations marocaines, 
            des conseils de voyage et des récits d'aventures authentiques.
          </p>
        </div>
      </main>
    </div>
  );
}
