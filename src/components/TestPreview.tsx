import React from 'react';
import { FileText, Download } from 'lucide-react';

// Mock PDF download - in a real app, this would be a real PDF file
const mockPdfPath = './Stagelink_briefing.pdf';
const mockPdfName = 'Application Briefing';

const TestPreview: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Download the preview of our assessment test to understand what you'll need to complete as part of your application.
          </h2>
          <div className="flex items-center mt-2 sm:mt-4">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-black mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">{mockPdfName}</p>
              <p className="text-sm text-gray-500">PDF Document • 1.3 MB</p>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col justify-end">
          <button
            type="button"
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center whitespace-nowrap"
            onClick={() => window.open(mockPdfPath, '_blank')}
          >
            <Download className="h-4 w-4 mr-2" />
            Preview
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestPreview;