import { User, IUser } from '../../entities/user';
import mapper from '../mappers/authMapper';

async function findMemberExist(data: any) {
  try {
    const query = {
      "email": data.email,
    };
    let user = await User.findOne(query).exec();
    //console.log(user);
    return user;
  } catch (e) {
    // console.log('Error: ', e);
  }
}

async function save(data: any) {
  try {
    //console.log("Auth repository => ", data);
    let user = new User({
      email: data.email,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname,
      status: data.status,
      role: data.role
    })
    let newUser = await user.save();
    let result = await mapper(newUser);
    return result;
  } catch (e) {
    // console.log('Error: ', e);
  }
}


const memberRepository = {
  findMemberExist,
  save
};

export default memberRepository;
