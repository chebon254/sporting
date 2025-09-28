"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Trophy,
  Target,
  Medal,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/athlete-1840437_1920.jpg"
            alt="Athletic training facility"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Achievements
            </h1>
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
              Champions We&apos;ve Developed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of the extraordinary athletes who have trained with us
              and achieved greatness on the world stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Sarah Johnson"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-white border-none">
                      Olympic Gold
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sarah Johnson
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    Track & Field - 400m
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Olympic Gold Medalist and World Record holder in the 400m.
                    Trained with us for 8 years, developing the speed and
                    endurance that made her a champion.
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
                  <Image
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Mike Rodriguez"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white border-none">
                      NBA Champion
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mike Rodriguez
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    Professional Basketball
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    NBA Champion and All-Star. Developed his explosive
                    athleticism and court vision through our comprehensive
                    basketball training program.
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
                  <Image
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="James Wilson"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white border-none">
                      NFL Pro Bowl
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    James Wilson
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    Professional Football
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    NFL Pro Bowl linebacker who built his foundation of
                    strength, speed, and agility through our elite football
                    training programs.
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
                  <Image
                    src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Emma Chen"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white border-none">
                      World Champion
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Emma Chen
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    Swimming - Freestyle
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    World Champion swimmer who perfected her technique and built
                    championship endurance through our aquatic training
                    programs.
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
                  <Image
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="David Martinez"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white border-none">
                      MMA Champion
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    David Martinez
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    Mixed Martial Arts
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    UFC Champion who developed his explosive power,
                    conditioning, and mental toughness through our comprehensive
                    MMA training program.
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
                  <Image
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Lisa Thompson"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600 text-white border-none">
                      Olympic Silver
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lisa Thompson
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    Gymnastics - All-Around
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Olympic Silver Medalist who refined her strength,
                    flexibility, and precision through our specialized
                    gymnastics training programs.
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
    </div>
  );
}
