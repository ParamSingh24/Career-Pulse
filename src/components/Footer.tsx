
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="font-bold">
                <span className="text-xs uppercase tracking-widest text-gray-500 block">Kalpathon</span>
                <span className="text-lg">BBD CareerPulse</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              AI-powered career acceleration platform that helps job seekers optimize resumes, 
              track applications, and land their dream jobs faster.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase text-gray-500">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Testimonials', 'For Teams', 'For Enterprise'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase text-gray-500">Company</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Privacy', 'Terms', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} BBD CareerPulse. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Designed & coded by Akhil Jyot • Kalpathon 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
