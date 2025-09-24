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
  Dumbbell,
  Send,
  MessageSquare,
  Calendar,
  Users,
  Award
} from "lucide-react";
import Link from 'next/link';

export default function ContactPage() {
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
            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white border-none px-4 py-2 text-sm font-semibold">
              GET IN TOUCH
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Athletic Team
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to start your athletic journey? Get in touch with our team to learn more about our programs and schedule your facility tour.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
                SEND MESSAGE
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Let's Start the Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss how we can help you achieve your athletic goals.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Program Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    <option>Select a program</option>
                    <option>Strength Training</option>
                    <option>Speed & Agility</option>
                    <option>Conditioning</option>
                    <option>Sport-Specific Training</option>
                    <option>Team Training</option>
                    <option>Elite Coaching</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your athletic goals and how we can help..."
                  ></textarea>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 px-8 py-4 text-lg font-semibold"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
                CONTACT INFO
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch Today
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Multiple ways to connect with our team. Choose the method that works best for you.
              </p>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Visit Our Facility</h4>
                        <p className="text-gray-600 mb-2">123 Athletic Drive<br />Champions City, CA 90210</p>
                        <p className="text-sm text-gray-500">Free parking available on-site</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Call Us Today</h4>
                        <p className="text-gray-600 mb-2">(555) 123-ATHLETIC</p>
                        <p className="text-sm text-gray-500">Available Monday - Friday, 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                        <p className="text-gray-600 mb-2">info@townhallathletics.com</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-xl">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Training Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 5:00 AM - 10:00 PM</p>
                          <p>Saturday - Sunday: 6:00 AM - 8:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Response Guarantee</h4>
                <p className="text-gray-600 text-sm">
                  We understand that starting your athletic journey is important to you. That's why we guarantee a response to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
              FREQUENTLY ASKED
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get quick answers to the most common questions about our programs and facility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What programs do you offer?</h4>
                    <p className="text-gray-600">
                      We offer comprehensive athletic training programs including strength training, speed & agility, conditioning, sport-specific training, team training, and elite one-on-one coaching.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How do I schedule a facility tour?</h4>
                    <p className="text-gray-600">
                      You can schedule a tour by calling us at (555) 123-ATHLETIC, filling out our contact form, or emailing us directly. Tours are available during business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Do you work with all skill levels?</h4>
                    <p className="text-gray-600">
                      Absolutely! As a non-profit organization, we're committed to serving athletes of all backgrounds and skill levels, from beginners to elite competitors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What makes your programs unique?</h4>
                    <p className="text-gray-600">
                      Our programs combine world-class coaching, state-of-the-art equipment, and a community-focused approach that emphasizes both athletic and personal development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
              FIND US
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Facility
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Champions City with easy access and ample parking.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Athletic Drive, Champions City, CA 90210</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Directions</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    From Downtown: Take Highway 101 North, exit at Athletic Drive. We're located 2 blocks east on the right side.
                  </p>
                  <Button variant="outline" className="w-full">
                    Get Directions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Parking</h4>
                  <p className="text-gray-600 text-sm">
                    Free parking available in our dedicated lot. Additional street parking available on Athletic Drive.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Public Transit</h4>
                  <p className="text-gray-600 text-sm">
                    Bus routes 15 and 22 stop directly in front of our facility. Metro station is a 10-minute walk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Take the first step towards achieving your athletic goals. Contact us today to begin your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Schedule Your Tour
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
            >
              Call Now: (555) 123-ATHLETIC
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}