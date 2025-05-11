import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/Coursedetail';
import CourseLearning from './pages/CourseLearning';
import Quiz from './pages/Quiz';
import Certificate from './pages/Certificate';
import { AuthProvider } from './Context/AuthContext';

import PrivateRoute from './components/Auth/PrivateRoute';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Signup from './components/auth/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
<div style={{ height: '1px' }}></div> {/* Spacer div */}


        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            
            <Route path="/courses/:courseId/learn" element={<CourseLearning />} />
            <Route path="/courses/:courseId/quiz" element={<Quiz />} />
            <Route path="/certificates/:courseId" element={<Certificate />} />
            <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />


          
          </Routes>
        </main>
        <Footer />
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
