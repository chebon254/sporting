"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Users,
  Trophy,
  Heart,
  Target,
  Zap,
  Facebook,
  Twitter,
  ArrowRight,
  Play,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Kenyan athletes training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              MOVING FORWARD
              <span className="block text-red-500">TOWARDS THE DREAM</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              We help athletes obtain the resources and support they need to go
              on with their passion and dreams.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
              onClick={() => scrollToSection("about")}
            >
              Find Out More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-0.5 bg-red-500"></div>
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                  Welcome To
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Townhall Athletics Club
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that by working together with our will and
                compassion, we can help Kenyan athletes pursue their passion and
                follow their dreams. Through our organization, we can provide
                them with the resources, support, equipment, and facilities they
                need for their training and competition. Townhall Athletics Club
                also helps athletes obtain their needed skills and discipline to
                perform excellently.
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Kenyan athletes running"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative animate-slide-in-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Athletes training together"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-0.5 bg-red-500"></div>
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Programs We Offer
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We categorized our programs according to purpose, the needs, and
                the activities of our athletes to provide them with proper
                assistance.
              </p>

              <div className="space-y-4">
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      TRAINING PROGRAM
                    </h3>
                    <ArrowRight className="h-6 w-6 text-red-500 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      RECRUITING CLUB
                    </h3>
                    <ArrowRight className="h-6 w-6 text-red-500 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    alt="Set an appointment"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-8 h-0.5 bg-red-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    SET AN
                    <br />
                    APPOINTMENT
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Let us discuss how we can help you or address your help to
                    our athletes.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg">
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    alt="Send referrals"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-8 h-0.5 bg-red-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    SEND YOUR
                    <br />
                    REFERRALS
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Allow us to help other athletes by referring them to us.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg">
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
            alt="Team of athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Our Mission Statement
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed">
              It is our mission to promote the growth and development of our
              Kenyan athletes by providing them the exceptional support they
              need to compete with other athletes and go through proper
              training. We must use our connections and passion to obtain what
              they need.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
            >
              About Us
            </Button>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
      `}</style>
    </div>
  );
}
