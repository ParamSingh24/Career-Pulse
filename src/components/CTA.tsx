
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Start optimizing your career journey today
              </h2>
              <p className="text-gray-300 mb-6">
                Join thousands of professionals who have accelerated their job search with CareerPulse AI. Get started with a free account in less than 2 minutes.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Resume optimization with AI feedback</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Job trends and market insights</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Personalized career coaching</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Application tracking dashboard</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Free basic account available</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="mr-4 bg-white text-black hover:bg-gray-100">
                Sign up free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn more
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-6">Get a free resume analysis</h3>
            <p className="text-sm text-gray-300 mb-8">See how your resume scores against industry standards</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Upload Resume</label>
                <div className="border border-dashed border-gray-600 rounded-md p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-xs text-gray-300">PDF</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">Drag and drop your resume, or <span className="text-blue-400">browse</span></p>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Free Analysis
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
