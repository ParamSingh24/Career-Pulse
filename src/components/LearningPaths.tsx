
import React from 'react';
import { BookOpen, Trophy, Clock, ExternalLink, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Course = {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  link: string;
  skills: string[];
};

type LearningPathsProps = {
  courses: Course[];
};

const LearningPaths = ({ courses }: LearningPathsProps) => {
  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-12 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Recommended Learning Paths</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Personalized courses and resources to help you acquire the necessary skills
          and bridge the gap between your current abilities and your career goals.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="h-full flex flex-col card-hover overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-800">{course.title}</CardTitle>
                <Badge variant="outline" className={getLevelColor(course.level)}>
                  {course.level}
                </Badge>
              </div>
              <CardDescription className="flex items-center gap-1">
                <Tag size={14} className="text-blue-500" />
                {course.provider}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pb-4">
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-2 h-4 w-4 text-blue-500" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <Trophy className="mr-2 h-4 w-4 text-purple-500" />
                  <span>Skills you'll gain</span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button asChild className="w-full btn-gradient">
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Course
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-sm text-gray-500 mb-4">
          Looking for more learning resources? We have more recommendations tailored for you.
        </p>
        <Button variant="outline" className="border-blue-300 hover:bg-blue-50 text-blue-600">
          View All Recommendations
        </Button>
      </div>
    </div>
  );
};

export default LearningPaths;
