
import React from 'react';
import { BarChart, Users, Building, Clock } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Results that speak for themselves</h2>
        <p className="section-description">
          CareerPulse AI delivers measurable improvements to your job search success and career growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="stat-card">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-sm">Resume Success Rate</span>
              <BarChart className="h-5 w-5 text-gray-600" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">76%</span>
              <p className="text-sm text-gray-500 mt-1">Higher interview callback rate</p>
            </div>
            <div className="mt-auto pt-4">
              <span className="text-xs text-green-600 font-medium">+23.4% quarter-over-quarter</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-sm">Users Helped</span>
              <Users className="h-5 w-5 text-gray-600" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">5,000+</span>
              <p className="text-sm text-gray-500 mt-1">Job seekers served successfully</p>
            </div>
            <div className="mt-auto pt-4">
              <span className="text-xs text-gray-600">Growing daily</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-sm">Companies Hiring</span>
              <Building className="h-5 w-5 text-gray-600" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">3,200+</span>
              <p className="text-sm text-gray-500 mt-1">Companies across industries</p>
            </div>
            <div className="mt-auto pt-4">
              <span className="text-xs text-gray-600">Including Fortune 500</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-sm">Time Saved</span>
              <Clock className="h-5 w-5 text-gray-600" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">65%</span>
              <p className="text-sm text-gray-500 mt-1">Reduction in job search time</p>
            </div>
            <div className="mt-auto pt-4">
              <span className="text-xs text-gray-600">Industry leading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
