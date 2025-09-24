"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
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
  Zap
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Athletic training facility"
            className="w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white border-none px-4 py-2 text-sm font-semibold">
              ELITE ATHLETIC TRAINING
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Athletic Performance
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art training facility dedicated to helping athletes reach their peak performance through personalized coaching and cutting-edge equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                Explore Programs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
                ABOUT US
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Where Champions Are
                <span className="block text-blue-900">Made</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For over a decade, Town Hall Athletics has been the premier destination for serious athletes looking to take their performance to the next level. Our world-class facility combines cutting-edge equipment with expert coaching to create an environment where athletic excellence thrives.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">2,500+</div>
                  <div className="text-gray-600">Athletes Trained</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-gray-600">Championships</div>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 px-8"
                onClick={() => scrollToSection('services')}
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Modern gym interior"
                  className="w-full h-[500px] object-cover"
                  width={800}
                  height={500}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">98% Success Rate</div>
                    <div className="text-sm text-gray-600">Goal Achievement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Elite Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive athletic development programs designed to maximize your potential across all aspects of performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strength Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build functional strength with our progressive resistance training programs designed for athletic performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    Olympic Lifting Techniques
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    Functional Movement Patterns
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    Progressive Overload Systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Speed & Agility</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enhance your explosive power and reaction time with sport-specific agility training protocols.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    Sprint Mechanics Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    Plyometric Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    Reaction Time Training
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conditioning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build elite-level endurance and cardiovascular fitness tailored to your sport&apos;s demands.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    Sport-Specific Conditioning
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    Metabolic Training Systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    Recovery Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sport-Specific Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specialized programs designed around the unique demands of your specific sport or position.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Movement Pattern Analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Position-Specific Drills
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    Competition Preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Team Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive team development programs that build chemistry and collective performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                    Group Conditioning Sessions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                    Team Building Activities
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                    Leadership Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elite Coaching</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  One-on-one coaching with certified professionals who have trained championship-level athletes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                    Personalized Training Plans
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                    Performance Analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                    Mental Performance Training
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 border-none">
              SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Athletes Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the champions who have transformed their performance at Town Hall Athletics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;The training at Town Hall Athletics completely transformed my game. The personalized approach and expert coaching helped me reach the next level in my sport.&rdquo;
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Professional Soccer Player</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;The facility is world-class and the coaches are incredibly knowledgeable. I&apos;ve seen massive improvements in my strength and conditioning since joining.&rdquo;
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Mike Rodriguez"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                    <div className="text-sm text-gray-600">College Basketball Player</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;Town Hall Athletics helped me achieve my dream of playing Division I football. The comprehensive training program made all the difference.&rdquo;
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="James Wilson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">James Wilson</div>
                    <div className="text-sm text-gray-600">Division I Football Player</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
                GET IN TOUCH
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Start Your
                <span className="block text-orange-500">Athletic Journey?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Take the first step towards achieving your athletic goals. Contact us today to schedule a facility tour and consultation with our expert coaches.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Our Facility</div>
                    <div className="text-gray-600">123 Athletic Drive, Champions City, CA 90210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us Today</div>
                    <div className="text-gray-600">(555) 123-ATHLETIC</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">info@townhallathletics.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Training Hours</div>
                    <div className="text-gray-600">Monday - Sunday: 5:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 mr-4"
                >
                  Schedule Tour
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8"
                >
                  Get Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Athletic training session"
                    className="w-full h-[400px] object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Join the Elite</h3>
                    <p className="text-gray-600 mb-6">
                      Experience the difference that world-class training can make in your athletic performance.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-900">50+</div>
                        <div className="text-sm text-gray-600">Expert Coaches</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500">24/7</div>
                        <div className="text-sm text-gray-600">Access Available</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-xl text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}