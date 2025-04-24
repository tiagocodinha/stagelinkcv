import React from 'react';
import { FileText, Download } from 'lucide-react';

// Mock PDF download - in a real app, this would be a real PDF file
const mockPdfPath = './CurrículoLilianaGonçalves.pdf';
const mockPdfName = 'Candidate Assessment Test Preview';

const TestPreview: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Download the preview of our assessment test to understand what you'll need to complete as part of your application.</h2>
          <div className="flex items-center mt-4">
            <FileText className="h-10 w-10 text-black mr-3" />
            <div>
              <p className="font-medium text-gray-700">{mockPdfName}</p>
              <p className="text-sm text-gray-500">PDF Document • 2.4 MB</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-black hover:bg-grey-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
          onClick={() => window.open(mockPdfPath, '_blank')}
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </button>
      </div>
    </section>
  );
};

export default TestPreview;