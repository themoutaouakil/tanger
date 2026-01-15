import Link from "next/link";

export const metadata = {
  title: "Blog - IMIGO Immigration Tanger",
  description: "Actualités et conseils sur l'immigration au Canada. Restez informé des dernières nouvelles et mises à jour.",
};

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Blog & Actualités</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles et conseils sur l'immigration au Canada
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 card-hover">
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-primary">
                    {post.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <Link href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                    Lire la suite
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Restez informé</h2>
            <p className="text-xl text-gray-600 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et conseils sur l'immigration au Canada
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const blogPosts = [
  {
    title: "Nouveaux tirages Entrée Express 2025",
    excerpt: "Découvrez les dernières mises à jour concernant les tirages Entrée Express et les scores CRS minimums requis pour recevoir une invitation.",
    category: "Entrée Express",
    date: "15 janvier 2025",
    icon: <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
  {
    title: "Comment améliorer votre score CRS",
    excerpt: "Stratégies efficaces pour augmenter votre score CRS et maximiser vos chances de recevoir une invitation à présenter une demande.",
    category: "Conseils",
    date: "10 janvier 2025",
    icon: <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
  {
    title: "Témoignage : De Tanger à Toronto",
    excerpt: "L'histoire inspirante de Mohammed et sa famille qui ont réussi leur immigration au Canada grâce au programme Entrée Express.",
    category: "Témoignages",
    date: "5 janvier 2025",
    icon: <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Calendrier des tirages 2025",
    excerpt: "Consultez le calendrier prévisionnel des tirages Entrée Express pour l'année 2025 et planifiez votre demande en conséquence.",
    category: "Actualités",
    date: "28 décembre 2024",
    icon: <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "Documents requis pour Entrée Express",
    excerpt: "Liste complète et détaillée de tous les documents nécessaires pour votre demande de résidence permanente via Entrée Express.",
    category: "Guide",
    date: "20 décembre 2024",
    icon: <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  },
  {
    title: "Délais de traitement : ce qu'il faut savoir",
    excerpt: "Comprendre les délais de traitement pour chaque étape du processus d'immigration et comment les anticiper efficacement.",
    category: "Conseils",
    date: "15 décembre 2024",
    icon: <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

