import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-lg font-bold mb-4">IMIGO Immigration Tanger</h4>
            <p className="text-gray-400 leading-relaxed">
              Cabinet agréé spécialisé dans l'immigration au Canada. Votre partenaire de confiance depuis 15 ans.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400 leading-relaxed">
              +212 5 39 XX XX XX<br />
              tanger@imigo-immigration.ma<br />
              Tanger, Maroc
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horaires</h4>
            <p className="text-gray-400 leading-relaxed">
              Lundi - Vendredi : 9 h - 18 h<br />
              Samedi : 9 h - 13 h<br />
              Dimanche : Fermé
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/processus" className="text-gray-400 hover:text-white transition-colors">
                  Processus
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2025 IMIGO Immigration Tanger. Tous droits réservés. Cabinet agréé N° R705681
        </div>
      </div>
    </footer>
  );
}

