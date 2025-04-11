
import React, { useState } from 'react';

type Career = 'Recent Graduate' | 'Career Changer' | 'Executive';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<Career>('Recent Graduate');
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Trusted by job seekers at every career stage</h2>
        <p className="section-description">
          See how CareerPulse AI has helped professionals from different backgrounds achieve their career goals.
        </p>
        
        <div className="max-w-3xl mx-auto mt-10">
          <div className="flex border-b border-gray-200 mb-8">
            {(['Recent Graduate', 'Career Changer', 'Executive'] as Career[]).map((tab) => (
              <button
                key={tab}
                className={`py-3 px-6 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              </div>
              <div>
                <div className="text-2xl text-gray-400 mb-2">"</div>
                <p className="text-gray-700 mb-4">
                  As a recent CS graduate with no industry experience, I was getting zero callbacks. 
                  CareerPulse AI helped optimize my resume and taught me how to highlight my 
                  projects effectively. Within 3 weeks, I landed 5 interviews and got my dream job offer 
                  at Google!
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Alex Chen</h4>
                  <p className="text-sm text-gray-500">Software Engineer at Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
