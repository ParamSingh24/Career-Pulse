
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, FileText, FileX, CheckSquare } from 'lucide-react';
import { toast } from 'sonner';

type ResumeUploaderProps = {
  onAnalyze: (file: File) => void;
};

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onAnalyze }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    // Allow only PDF, DOCX, DOC, RTF, TXT files
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'application/rtf', 'text/plain'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(selectedFile.type)) {
      toast.error("Please upload a valid resume file (PDF, DOCX, DOC, RTF, or TXT)");
      return;
    }

    if (selectedFile.size > maxSize) {
      toast.error("File size exceeds 5MB. Please upload a smaller file.");
      return;
    }

    setFile(selectedFile);
    toast.success("Resume file selected successfully!");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      validateAndSetFile(droppedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="section-title">Analyze Your Resume</h2>
        <p className="section-description">
          Upload your resume to get AI-powered insights about your skills, 
          identify gaps, and receive personalized learning recommendations.
        </p>
      </div>
      
      <div className="bg-white shadow-md rounded-lg border border-gray-200 p-8">
        <div 
          className={`border-2 border-dashed rounded-lg mb-6 transition-colors ${
            isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
          } ${file ? 'bg-gray-50' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!file ? (
            <div className="text-center py-12 px-4">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Upload size={24} className="text-gray-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">Drop your resume here</h3>
              <p className="text-gray-500 text-sm mb-4">or click to browse from your computer</p>
              <Button 
                variant="outline" 
                onClick={() => fileInputRef.current?.click()}
                className="mx-auto"
              >
                <FileText className="mr-2 h-4 w-4" />
                Browse Files
              </Button>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange} 
                className="hidden" 
                accept=".pdf,.docx,.doc,.rtf,.txt" 
              />
              <p className="text-xs text-gray-400 mt-4">
                Supported formats: PDF, DOCX, DOC, RTF, TXT (Max 5MB)
              </p>
            </div>
          ) : (
            <div className="py-6 px-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-4">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB • {file.type.split('/')[1].toUpperCase()}
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleRemoveFile}
                  className="text-gray-500 hover:text-red-500"
                >
                  <FileX size={18} />
                </Button>
              </div>
              <div className="flex justify-center mt-6">
                <div className="p-3 bg-green-100 text-green-600 rounded-full">
                  <CheckSquare size={24} />
                </div>
              </div>
              <p className="text-center text-sm text-green-600 font-medium mt-2">Ready for analysis</p>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => file && onAnalyze(file)}
            disabled={!file}
            className="bg-black hover:bg-gray-800 text-white"
            size="lg"
          >
            {file ? "Analyze Resume" : "Upload Resume to Analyze"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploader;
