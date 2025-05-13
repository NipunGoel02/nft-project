const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key_here'; // Replace with your actual secret key
const isAdmin = (req, res, next) => {
  // Check if user is admin (modify according to your auth system)
  if(req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Admin access required' });
  }
};

function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}

module.exports = { auth, isAdmin };
