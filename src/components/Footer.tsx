import Link from "next/link";
import {
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="text-white font-bold text-lg">TOWNHALL</div>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-4">
                We believe that by working together with our will and
                compassion, we can help Kenyan athletes pursue their passion and
                follow their dreams.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contact Information
              </h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>Ronald, Ngala Street</p>
                    <p>Tarita Center, Fourth Floor, Room No. 10</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@townhallathletics.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Site Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/achievements"
                    className="hover:text-white transition-colors"
                  >
                    Athletes & Achievements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:text-white transition-colors"
                  >
                    Townhall Athletics Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; Copyright 2025
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
