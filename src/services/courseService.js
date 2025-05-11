// Mock data for courses
const mockCourses = [
    {
      id: '1',
      title: 'Introduction to Blockchain',
      description: 'Learn the fundamentals of blockchain technology and its applications.',
      thumbnail: './th.jpeg',
      category: 'blockchain',
      lessonCount: 12,
      duration: '6 hours',
      level: 'Beginner',
      isEnrolled: false,
      sections: [
        {
          title: 'Blockchain Basics',
          duration: '2 hours',
          lessons: [
            { title: 'What is Blockchain?', duration: '15 min', type: 'video' },
            { title: 'Decentralization Explained', duration: '20 min', type: 'video' },
            { title: 'Blockchain Architecture', duration: '25 min', type: 'video' },
            { title: 'Section Quiz', duration: '10 min', type: 'quiz' }
          ]
        },
        {
          title: 'Cryptocurrencies',
          duration: '2 hours',
          lessons: [
            { title: 'Introduction to Bitcoin', duration: '20 min', type: 'video' },
            { title: 'Ethereum and Smart Contracts', duration: '25 min', type: 'video' },
            { title: 'Altcoins and Tokens', duration: '15 min', type: 'video' },
            { title: 'Section Quiz', duration: '10 min', type: 'quiz' }
          ]
        }
      ],
      outcomes: [
        'Understand blockchain fundamentals',
        'Explain how cryptocurrencies work',
        'Identify blockchain use cases',
        'Create a simple smart contract'
      ],
      requirements: [
        'Basic understanding of computer science',
        'No prior blockchain knowledge required',
        'A computer with internet connection'
      ],
      instructor: {
        name: 'John Doe',
        title: 'Blockchain Developer',
        bio: 'John has 5 years of experience in blockchain development and has worked with major crypto projects.',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      }
    },
    // Add more courses as needed
  ];
  
  // Simulate API calls with delays
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  export const getCourses = async () => {
    await delay(800); // Simulate network delay
    return mockCourses;
  };
  
  export const getCourseById = async (id) => {
    await delay(500); // Simulate network delay
    const course = mockCourses.find(course => course.id === id);
    if (!course) throw new Error('Course not found');
    return course;
  };
  
export const enrollInCourse = async (courseId, token) => {
  const res = await fetch('http://localhost:5000/api/auth/enroll', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ courseId }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to enroll in course');
  }
  const data = await res.json();
  return data;
};
  