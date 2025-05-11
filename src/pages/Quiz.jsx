// src/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCourseById } from '../services/courseService';

const Quiz = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Mock quiz questions - in a real app, these would come from an API
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is blockchain?",
      options: [
        "A type of database that stores data in blocks that are linked together",
        "A programming language for smart contracts",
        "A cryptocurrency like Bitcoin",
        "A cloud storage solution"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which of the following is NOT a characteristic of blockchain?",
      options: [
        "Decentralization",
        "Transparency",
        "Immutability",
        "Centralized control"
      ],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "What is a smart contract?",
      options: [
        "A legal document for blockchain transactions",
        "Self-executing code that runs on a blockchain",
        "A contract between miners",
        "A secure wallet for cryptocurrencies"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the purpose of consensus mechanisms in blockchain?",
      options: [
        "To encrypt transactions",
        "To store data efficiently",
        "To agree on the state of the blockchain",
        "To create new cryptocurrencies"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Which of these is NOT a common consensus mechanism?",
      options: [
        "Proof of Work",
        "Proof of Stake",
        "Proof of Authority",
        "Proof of Identity"
      ],
      correctAnswer: 3
    }
  ]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(courseId);
        setCourse(data);
      } catch (err) {
        setError('Failed to load course details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  // Timer countdown
  useEffect(() => {
    if (loading || quizSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [loading, quizSubmitted]);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    // Calculate score
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setQuizSubmitted(true);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeft(600);
    setQuizSubmitted(false);
  };

  const handleFinishCourse = () => {
    // In a real app, you'd call an API to mark the course as completed
    // and generate a certificate
    navigate(`/certificates/${courseId}`);
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => navigate(`/courses/${courseId}/learn`)}
            className="inline-block px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Back to Course
          </button>
        </div>
      </div>
    );
  }

  if (quizSubmitted) {
    const isPassed = score >= 70; // 70% passing score
    
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className={`p-6 ${isPassed ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              <h2 className="text-2xl font-bold mb-2">Quiz Results</h2>
              <p>{course.title}</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      className="text-gray-200" 
                      strokeWidth="10" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="40" 
                      cx="50" 
                      cy="50" 
                    />
                    <circle 
                      className={`${isPassed ? 'text-green-500' : 'text-red-500'}`}
                      strokeWidth="10" 
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * score) / 100}
                      strokeLinecap="round" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="40" 
                      cx="50" 
                      cy="50" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">{score}%</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4">
                {isPassed ? 'Congratulations! You passed the quiz.' : 'Sorry, you did not pass the quiz.'}
              </h3>
              
              <p className="text-gray-600 text-center mb-8">
                {isPassed 
                  ? 'You can now claim your certificate for completing this course.' 
                  : 'You need to score at least 70% to pass. Would you like to try again?'}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {isPassed ? (
                  <button 
                    onClick={handleFinishCourse}
                    className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300"
                  >
                    Claim Certificate
                  </button>
                ) : (
                  <button 
                    onClick={handleRetakeQuiz}
                    className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300"
                  >
                    Retake Quiz
                  </button>
                )}
                
                <button 
                  onClick={() => navigate(`/courses/${courseId}/learn`)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Back to Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">{course.title} - Final Quiz</h1>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-teal-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className={`font-medium ${timeLeft < 60 ? 'text-red-500' : 'text-gray-600'}`}>
                  Time Remaining: {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Question {currentQuestionIndex + 1} of {questions.length}</span>
              <div className="w-48 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-teal-600 h-2.5 rounded-full" 
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Question Card */}
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 mb-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedAnswers[currentQuestionIndex] === index 
                      ? 'border-teal-500 bg-teal-50' 
                      : 'border-gray-200 hover:border-teal-200 hover:bg-teal-50/50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      selectedAnswers[currentQuestionIndex] === index 
                        ? 'border-teal-500 bg-teal-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestionIndex] === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300"
              >
                Submit Quiz
              </button>
            )}
          </div>
          
          {/* Question Navigation */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                    currentQuestionIndex === index 
                      ? 'bg-teal-500 text-white' 
                      : selectedAnswers[index] !== undefined 
                        ? 'bg-teal-100 text-teal-800 border border-teal-500' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
