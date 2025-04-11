
import React from 'react';
import { FileText, BarChart2, Users, Mail, ClipboardList, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Resume Optimization',
      description: 'AI-powered resume analysis and optimization to match job descriptions and increase interview chances.',
      buttonText: 'Learn More'
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Job Trend Analysis',
      description: 'Track industry trends, in-demand skills, and salary insights to make informed career decisions.',
      buttonText: 'Learn More'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'AI Career Coaching',
      description: 'Get personalized advice, interview tips, and guided feedback to improve your professional presence.',
      buttonText: 'Learn More'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Outreach',
      description: 'AI-generated personalized emails to recruiters that highlight your relevant skills and experience.',
      buttonText: 'Learn More'
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: 'Application Tracking',
      description: 'Track all your job applications, interviews, and follow-ups in one personalized dashboard.',
      buttonText: 'Learn More'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills and get recommendations for courses to become more competitive.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Everything you need to accelerate your career</h2>
        <p className="section-description">
          CareerPulse AI combines cutting-edge AI with practical tools to help you navigate the job market with confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex flex-col">
              <div className="mb-4 p-3 bg-gray-100 rounded-md w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
              <Button variant="outline" className="w-full justify-center mt-auto border-gray-300 text-black hover:bg-gray-100">
                {feature.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="link" className="text-blue-600 font-medium">
            Explore all features →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
