import { Request, Response, NextFunction } from 'express';
import jwt from '../../jsonwebtoken/jwt'

function validateToken(roles: string[]) {
  if (typeof roles === 'string') {
    roles = [roles];
  }
  return async (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
      const token = bearerHeader.split(' ')[1];
      let result = await jwt.verifyJwt(token);
      //console.log(result);
      if (!result.role) return res.status(403).json({ Error: result });
      else {
        const auth = await authorization(roles, result.role);
        if (auth) next();
        else res.status(401).json({Error : { message: 'Unauthorized'}});
      }
    } else {
      return res.status(403).json({ Error: { message: 'Denied access, endpoint protected' } });
    }
  }

}


async function authorization(roles: string[], role: string) {
  //console.log("Los roles: ", roles, "El role: ", role);
  if(roles.length && !roles.includes(role)){
    console.log("Unauthorized");
    return false;
  } else {
    return true;
  }
}


export default validateToken;
