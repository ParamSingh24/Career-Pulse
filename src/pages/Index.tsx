
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ResumeUploader from '@/components/ResumeUploader';
import AnalysisResults from '@/components/AnalysisResults';
import LearningPaths from '@/components/LearningPaths';
import { toast } from 'sonner';

// Mock data for analysis results
const mockAnalysisData = {
  jobTitle: "Senior Frontend Developer",
  skills: [
    { name: "React.js", level: 85, required: 80, gap: 0 },
    { name: "TypeScript", level: 70, required: 75, gap: 5 },
    { name: "UI/UX Design", level: 60, required: 70, gap: 10 },
    { name: "Testing", level: 40, required: 65, gap: 25 },
    { name: "GraphQL", level: 30, required: 60, gap: 30 },
  ],
  strengths: [
    "Strong proficiency in React.js and component architecture",
    "Good understanding of state management with Redux",
    "Experience with responsive design and cross-browser compatibility",
    "Solid HTML5, CSS3, and JavaScript fundamentals"
  ],
  weaknesses: [
    "Limited experience with automated testing frameworks",
    "Needs improvement in GraphQL and API integration",
    "Could strengthen TypeScript type system knowledge",
    "Minimal experience with CI/CD pipelines"
  ],
  recommendations: [
    "Add specific metrics and outcomes to your project descriptions",
    "Include more testing experience in your resume",
    "Develop a portfolio showcasing your UI/UX skills",
    "Consider pursuing a certification in GraphQL"
  ],
};

// Mock data for learning paths
const mockCoursesData = [
  {
    id: "course1",
    title: "Advanced TypeScript Masterclass",
    provider: "Frontend Masters",
    duration: "15 hours",
    level: "Intermediate" as const,
    description: "Learn advanced TypeScript features including generics, utility types, and complex type definitions.",
    link: "#",
    skills: ["TypeScript", "Type Systems", "JavaScript", "Web Development"]
  },
  {
    id: "course2",
    title: "Testing React Applications",
    provider: "Kent C. Dodds",
    duration: "12 hours",
    level: "Intermediate" as const,
    description: "Comprehensive guide to testing React applications with Jest, React Testing Library, and Cypress.",
    link: "#",
    skills: ["React", "Testing", "Jest", "Cypress"]
  },
  {
    id: "course3",
    title: "GraphQL API Development",
    provider: "Apollo",
    duration: "20 hours",
    level: "Advanced" as const,
    description: "Build, query, and maintain GraphQL APIs for modern web applications.",
    link: "#",
    skills: ["GraphQL", "APIs", "Node.js", "Apollo Server"]
  }
];

const Index = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleAnalyze = (file: File) => {
    // This would normally be an API call to process the resume
    setIsUploading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsUploading(false);
      setShowAnalysis(true);
      toast.success("Resume analyzed successfully!");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      
      <main>
        <Hero />
        
        <Features />
        
        <div id="upload" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {!showAnalysis ? (
              <ResumeUploader onAnalyze={handleAnalyze} />
            ) : (
              <div className="space-y-16">
                <AnalysisResults 
                  jobTitle={mockAnalysisData.jobTitle} 
                  skills={mockAnalysisData.skills}
                  strengths={mockAnalysisData.strengths}
                  weaknesses={mockAnalysisData.weaknesses}
                  recommendations={mockAnalysisData.recommendations}
                />
                
                <LearningPaths courses={mockCoursesData} />
              </div>
            )}
          </div>
        </div>
        
        <Stats />
        
        <Testimonials />
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
