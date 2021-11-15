import { userDTO } from '../dtos/userDTO'


const mapper = (user: any) => {
  const dto: userDTO = {
    id: user._id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    status: user.status,
    role: user.role
  }
  return dto;
}

export default mapper;
