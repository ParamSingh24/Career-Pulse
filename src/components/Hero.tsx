
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, BarChart } from 'lucide-react';

const Hero = () => {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload');
    uploadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Supercharge your career <span className="text-gray-500">journey with AI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Upload your resume, get AI-powered optimization, track job trends, automate applications, and land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white"
                onClick={scrollToUpload}
              >
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300">
                See how it works
              </Button>
            </div>
            
            <div className="mt-10 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white" />
                ))}
              </div>
              <span>3,500+ job seekers already using CareerPulse</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-500 ml-2">Resume Analysis</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <span className="text-xs">AI</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-sm">
                  I've analyzed your resume. Here are 3 key improvements to increase your interview chances by 65%.
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <div className="font-medium">Quantify your achievements with specific metrics</div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <div className="font-medium">Add key industry keywords to pass ATS systems</div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <div className="font-medium">Highlight your leadership experience more prominently</div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask follow-up questions..." 
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
