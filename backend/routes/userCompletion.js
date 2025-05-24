const express = require('express');
const router = express.Router();
const {auth }= require('../middleware/auth');
const User = require('../models/User');
const Course = require('../models/Course');

// POST /api/userCompletion/submit-quiz
router.post('/submit-quiz', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId, answers } = req.body;

    if (!courseId || !answers) {
      return res.status(400).json({ error: 'courseId and answers are required' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    if (!course.quizQuestions || course.quizQuestions.length === 0) {
      return res.status(400).json({ error: 'Course has no quiz questions' });
    }

    // Calculate score
    let correctCount = 0;
    course.quizQuestions.forEach((question, index) => {
      if (answers[index] === question.options[question.correctAnswer]) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / course.quizQuestions.length) * 100);

    // Check if user passed (passing score 70)
    const passed = score >= 70;

    // Update user completedCourses if passed and not already completed
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (passed && !user.completedCourses.includes(courseId)) {
      user.completedCourses.push(courseId);
      await user.save();
    }

    // Optionally, save quiz results in user or separate collection (not implemented here)

    return res.json({ message: 'Quiz submitted', score, passed });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/userCompletion/complete-course
router.post('/complete-course', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ error: 'courseId is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.completedCourses.includes(courseId)) {
      user.completedCourses.push(courseId);
      await user.save();
    }

    return res.json({ message: 'Course marked as completed' });
  } catch (error) {
    console.error('Error marking course as completed:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
