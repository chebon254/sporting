"use client";

import { useState, useEffect } from 'react';
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
  Dumbbell,
  Users,
  Trophy,
  Heart,
  Target,
  Zap,
  Award,
  Calendar,
  CheckCircle
} from "lucide-react";
import Link from 'next/link';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Athletic training facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white border-none px-4 py-2 text-sm font-semibold">
              NON-PROFIT ORGANIZATION
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Mission & Vision
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Empowering athletes and building stronger communities through accessible, high-quality athletic training and development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
                OUR MISSION
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Champions,
                <span className="block text-blue-900">Strengthening Communities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Town Hall Athletics is a non-profit organization dedicated to providing world-class athletic training and development opportunities to athletes of all backgrounds and skill levels. We believe that every individual deserves access to quality coaching, state-of-the-art facilities, and the support needed to reach their full potential.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accessible Excellence</h4>
                    <p className="text-gray-600">Making elite-level training accessible to athletes regardless of economic background.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Community Impact</h4>
                    <p className="text-gray-600">Creating positive change through sports and athletic development programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Holistic Development</h4>
                    <p className="text-gray-600">Focusing on athletic, mental, and character development for well-rounded individuals.</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 px-8"
              >
                Learn More About Our Programs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Community training session"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Community First</div>
                    <div className="text-sm text-gray-600">Non-Profit Organization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
              OUR VALUES
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from training programs to community outreach initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We welcome athletes of all backgrounds, abilities, and skill levels, creating an environment where everyone can thrive and grow.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in coaching, facilities, and programs to help every athlete reach their maximum potential.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of community and work to strengthen bonds through shared athletic experiences and achievements.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate with transparency, honesty, and ethical practices in all our programs and community interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We continuously evolve our methods and programs, incorporating the latest in sports science and training techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We empower athletes to believe in themselves, overcome challenges, and achieve goals they never thought possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
              OUR STORY
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a cornerstone of athletic development in our community.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-900">2010 - FOUNDING</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Town Hall Athletics was founded with a simple yet powerful vision: to create a space where athletic excellence meets community impact. Starting with just a small facility and a handful of dedicated coaches, we began our mission to make elite training accessible to all.
                </p>
              </div>
              <div className="lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Early training facility"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <Badge className="bg-orange-100 text-orange-900">2015 - EXPANSION</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  As our community grew, so did we. We expanded our facility, added specialized equipment, and brought in expert coaches from various disciplines. Our programs began producing championship-level athletes while maintaining our commitment to serving all skill levels.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Expanded facility"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <Badge className="bg-green-100 text-green-900">2020 - INNOVATION</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Adapting & Thriving</h3>
                <p className="text-gray-600 leading-relaxed">
                  When challenges arose, we innovated. We developed virtual training programs, enhanced our safety protocols, and found new ways to serve our community. This period strengthened our resolve and expanded our reach beyond physical boundaries.
                </p>
              </div>
              <div className="lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Modern training methods"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-900">TODAY - EXCELLENCE</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuing the Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, Town Hall Athletics stands as a beacon of excellence in athletic development. With over 2,500 athletes trained and countless success stories, we continue to evolve while staying true to our founding principles of accessibility, excellence, and community impact.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Current state-of-the-art facility"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
              OUR IMPACT
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Making a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to athletic excellence and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Athletes Trained</div>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Championships Won</div>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Scholarship Recipients</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Become part of a legacy that's dedicated to athletic excellence and community impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/achievements">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
              >
                View Our Achievements
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}