import React, { useState } from 'react';

// Sample video feedback data
const feedbackData = [
  {
    id: 1,
    studentName: "John Doe",
    feedbackVideo: "coHzNJBtTIU", // Sample video URL
    timestamp: "2024-11-01",
    description: "Detailed feedback on the recent project, covering areas for improvement.",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    feedbackVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    timestamp: "2024-11-02",
    description: "Feedback on assignment 2, with notes on strengths and areas to focus on.",
  },
  // Add more feedback objects as needed
];

const FeedbackVideos = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  return (
    <div className="px-16 pb-16 " id='FAQ'>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Student Video Feedback</h2>
      <div className="grid md:grid-cols-3 gap-2 ">
        {feedbackData.map((feedback) => (
        <iframe
        key={feedback.id}
          src={`https://www.youtube.com/embed/${feedback.feedbackVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=' max-w-3xl w-full h-80 rounded-3xl'
        ></iframe>
    
        
        ))}
      </div>

      {/* Modal to play selected feedback video */}
      {selectedFeedback && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedFeedback(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Feedback for {selectedFeedback.studentName}
            </h3>
            <p className="text-gray-500 mb-4">{selectedFeedback.timestamp}</p>
            <video controls className="w-full rounded-lg shadow-md">
              <source src={selectedFeedback.feedbackVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
              onClick={() => setSelectedFeedback(null)}
            >
              Close Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackVideos;
