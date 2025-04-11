
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, TrendingUp, Lightbulb, Target } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  level: number;
  required: number;
  gap: number;
};

type AnalysisResultsProps = {
  jobTitle: string;
  skills: Skill[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
};

const AnalysisResults = ({
  jobTitle,
  skills,
  strengths,
  weaknesses,
  recommendations,
}: AnalysisResultsProps) => {
  return (
    <div className="space-y-10 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">Your Resume Analysis</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here's what we found based on your resume for the role: <span className="font-semibold">{jobTitle}</span>
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="card-hover overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-3">
            <CardTitle className="flex items-center text-lg font-semibold text-blue-800">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
              Skills Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      {skill.gap > 0 ? (
                        <Badge variant="outline" className="ml-2 text-xs bg-amber-100 text-amber-800 border-amber-200">
                          Gap: {skill.gap}%
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="ml-2 text-xs bg-green-100 text-green-800 border-green-200">
                          Proficient
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${skill.gap > 0 ? 'bg-amber-500' : 'bg-green-500'}`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    {skill.gap > 0 && (
                      <div className="relative">
                        <div 
                          className="absolute top-[-10px] h-2.5 border-r-2 border-dashed border-blue-700" 
                          style={{ left: `${skill.required}%` }}
                        >
                          <span className="absolute top-[-20px] left-[-12px] text-xs font-medium text-blue-700">
                            {skill.required}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card className="card-hover overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 pb-3">
              <CardTitle className="flex items-center text-lg font-semibold text-green-800">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 pb-3">
              <CardTitle className="flex items-center text-lg font-semibold text-red-800">
                <XCircle className="mr-2 h-5 w-5 text-red-600" />
                Areas to Improve
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">
                      <XCircle size={16} />
                    </div>
                    <span className="text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="card-hover overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 pb-3">
          <CardTitle className="flex items-center text-lg font-semibold text-purple-800">
            <Lightbulb className="mr-2 h-5 w-5 text-purple-600" />
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="mr-2 mt-1 text-purple-500">
                  <Target size={16} />
                </div>
                <span className="text-gray-700 text-sm">{recommendation}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResults;
