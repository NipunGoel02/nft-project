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
import AdminRoute from './components/Auth/AdminRoute'; // New admin route component
import Profile from './pages/Profile';
import Login from './components/Auth/Login.jsx';
import Signup from './components/auth/Signup';
import CoursePanel from './pages/CoursePanel';
import AdminLayout from './components/AdminLayout'; // New admin layout
import AdminCourses from './pages/AdminCourse'; // Admin courses list
import CourseForm from './pages/CourseForm'; // Admin course form
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
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetail />} />
               <Route path="/courses/:courseId/learn" element={<CourseLearning />} />
                  <Route path="/courses/:courseId/quiz" element={<Quiz />} />
                   <Route path="/certificates/:courseId" element={<Certificate />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Authenticated User Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/course-panel" element={<CoursePanel />} />
                <Route path="/courses/:courseId/learn" element={<CourseLearning />} />
                <Route path="/courses/:courseId/quiz" element={<Quiz />} />
                <Route path="/certificates/:courseId" element={<Certificate />} />
              </Route>

              {/* Admin Routes */}
              <Route element={<AdminRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminCourses />} />
                  <Route path="courses" element={<AdminCourses />} />
                  <Route path="courses/new" element={<CourseForm />} />
                  <Route path="courses/edit/:id" element={<CourseForm />} />
                </Route>
              </Route>
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
