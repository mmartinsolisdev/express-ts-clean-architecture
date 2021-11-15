import { Request, Response, NextFunction } from 'express';
import jwt from '../../jsonwebtoken/jwt'

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    let err = await jwt.verifyJwt(token);
    if (err) return res.status(403).json({ Error: err});
    else next();
  } else {
      return res.status(403).json({Error : { message: 'Denied access, endpoint protected'}});
  }
}


export default validateToken
