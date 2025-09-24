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
  Medal,
  Crown,
  TrendingUp,
  Globe
} from "lucide-react";
import Link from 'next/link';

export default function AchievementsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Athletic achievements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white border-none px-4 py-2 text-sm font-semibold">
              HALL OF CHAMPIONS
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Athletes &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Achievements
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Celebrating the incredible achievements of our athletes who have reached the pinnacle of their sports through dedication, training, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
              BY THE NUMBERS
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Legacy of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over 15 years of developing champions and creating success stories that inspire the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Championships Won</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">45</div>
              <div className="text-gray-600">Olympic Qualifiers</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">World Records</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
              FEATURED ATHLETES
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Champions We've Developed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of the extraordinary athletes who have trained with us and achieved greatness on the world stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Sarah Johnson"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-white border-none">
                      Olympic Gold
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                  <p className="text-orange-600 font-semibold mb-3">Track & Field - 400m</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Olympic Gold Medalist and World Record holder in the 400m. Trained with us for 8 years, developing the speed and endurance that made her a champion.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>3 Gold Medals</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>World Record</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Mike Rodriguez"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white border-none">
                      NBA Champion
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Rodriguez</h3>
                  <p className="text-orange-600 font-semibold mb-3">Professional Basketball</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    NBA Champion and All-Star. Developed his explosive athleticism and court vision through our comprehensive basketball training program.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>NBA Champion</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span>3x All-Star</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="James Wilson"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white border-none">
                      NFL Pro Bowl
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">James Wilson</h3>
                  <p className="text-orange-600 font-semibold mb-3">Professional Football</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    NFL Pro Bowl linebacker who built his foundation of strength, speed, and agility through our elite football training programs.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>Pro Bowl</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span>Team Captain</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Emma Chen"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white border-none">
                      World Champion
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emma Chen</h3>
                  <p className="text-orange-600 font-semibold mb-3">Swimming - Freestyle</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    World Champion swimmer who perfected her technique and built championship endurance through our aquatic training programs.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>World Champion</span>
                    </div>
                    <div className="flex items-center">
                      <Medal className="h-4 w-4 mr-1" />
                      <span>5 Gold Medals</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="David Martinez"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white border-none">
                      MMA Champion
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">David Martinez</h3>
                  <p className="text-orange-600 font-semibold mb-3">Mixed Martial Arts</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    UFC Champion who developed his explosive power, conditioning, and mental toughness through our comprehensive MMA training program.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>UFC Champion</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      <span>15-0 Record</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Lisa Thompson"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600 text-white border-none">
                      Olympic Silver
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Thompson</h3>
                  <p className="text-orange-600 font-semibold mb-3">Gymnastics - All-Around</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Olympic Silver Medalist who refined her strength, flexibility, and precision through our specialized gymnastics training programs.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Medal className="h-4 w-4 mr-1" />
                      <span>Olympic Silver</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span>World Medalist</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
              RECENT WINS
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our athletes continue to break barriers and set new standards of excellence across all sports.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <Trophy className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-yellow-500 text-white">2024 Olympics</Badge>
                      <span className="text-sm text-gray-500">August 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Three Gold Medals at Paris Olympics
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our athletes brought home three gold medals from the Paris Olympics, with Sarah Johnson setting a new world record in the 400m, Mike Chen dominating in swimming, and the relay team achieving a historic victory.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Medal className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-blue-600 text-white">World Championships</Badge>
                      <span className="text-sm text-gray-500">July 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      World Championship Sweep in Track & Field
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Town Hall Athletics athletes dominated the World Track & Field Championships, winning 8 medals across various events and establishing new personal bests in multiple disciplines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Crown className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-green-600 text-white">National Championships</Badge>
                      <span className="text-sm text-gray-500">June 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      15 National Titles Across Multiple Sports
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our athletes claimed 15 national championship titles across basketball, football, swimming, and track & field, demonstrating the effectiveness of our comprehensive training programs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-purple-600 text-white">Youth Development</Badge>
                      <span className="text-sm text-gray-500">2024 Season</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Record-Breaking Youth Program Success
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our youth development programs produced 25 state champions and 40 college scholarship recipients, with 95% of participants improving their performance metrics by over 30%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
              HALL OF FAME
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Legends of the Sport
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Honoring the athletes who have not only achieved greatness but have also inspired generations of future champions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Olympic Legends</h3>
                <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
                <p className="text-gray-600 mb-4">Olympic Gold Medalists</p>
                <p className="text-sm text-gray-500">
                  Athletes who reached the pinnacle of Olympic competition and brought home gold medals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">World Champions</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
                <p className="text-gray-600 mb-4">World Championship Titles</p>
                <p className="text-sm text-gray-500">
                  Athletes who dominated their sports on the world stage and claimed championship titles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Record Holders</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                <p className="text-gray-600 mb-4">World & National Records</p>
                <p className="text-sm text-gray-500">
                  Athletes who pushed the boundaries of human performance and set new world standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Join the ranks of champions who have trained at Town Hall Athletics. Your journey to greatness starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
              >
                Learn About Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}