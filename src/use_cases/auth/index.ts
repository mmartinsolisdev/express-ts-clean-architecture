import repository from '../../repositories/implementation/AuthRepository';
import jwt from '../../frameworks/jsonwebtoken/jwt';
import { encode, decode } from '../../frameworks/bcrypt/bcrypt';
import login from './singIn';
import register from './singUp';

const singIn = login(repository, jwt.generateToken, decode);
const singUp = register(repository, encode);

// user use case
const authUC = {
  singIn,
  singUp
};

export default authUC;
