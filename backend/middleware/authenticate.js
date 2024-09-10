import jwt from 'jsonwebtoken';

// Middleware function to authenticate requests
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    // If no token is provided, return a 403 Forbidden response
    return res.status(403).json({ message: 'No token provided' });
  }

  // Verify the token using the JWT_SECRET from environment variables
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // If token verification fails, return a 401 Unauthorized response
      console.log('error verifying token', err);
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    // If token is valid, store the decoded user information in the request object
    req.user = decoded;
    next();
  });
};

export default authenticate;
