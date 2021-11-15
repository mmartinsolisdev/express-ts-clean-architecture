import authUC from '../../use_cases/auth'
import singIn from './singIn';
import singUp from './singUp';

const login = singIn(authUC.singIn);
const register = singUp(authUC.singUp);

const authController = {
  login,
  register
};


export default authController;
