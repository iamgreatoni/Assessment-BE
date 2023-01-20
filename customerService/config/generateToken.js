import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (_id) => {
  return jwt.sign({ _id }, JWT_SECRET, {
    expiresIn: '24h',
  })
};

export default generateToken;
