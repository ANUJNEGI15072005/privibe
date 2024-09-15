const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 

    console.log('Decoded token:', decoded);

    const user = await User.findById(decoded.id);
    if (!user) {
      console.error('User not found');
      return res.status(401).json({ error: 'User not found' });
    }
    req.user = { id: decoded.id }; 
    next();
  } catch (error) {
    console.error('Invalid token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticate;
