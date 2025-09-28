"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
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
              About Us
            </h1>
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
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[500px]">
                <Image
                  src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Kenyan athletes running"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Cards */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 mb-16 animate-slide-in-up">
            <Card className="border-0 shadow-none rounded-none bg-red-600 text-white">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  It is our mission to promote the growth and development of our
                  Kenyan athletes by providing them the exceptional support they
                  need to compete with other athletes and go through proper
                  training. We must use our connections and passion to obtain
                  what they need. We inculcate the values of integrity,
                  responsibility, unconditional love, forgiveness, and
                  excellence in each athlete we care for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none rounded-none bg-gray-600 text-white">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">
                    Our Vision
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We want to witness our athletes achieving their dreams and
                  goals through our organization&apos;s help in addition to their
                  hard work and their family&apos;s support. Through our
                  contribution, we hope to open more doors and paths they can
                  walk towards achieving more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
