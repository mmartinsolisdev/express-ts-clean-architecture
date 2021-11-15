import { IUser } from '../../entities/user';

const singUp = (repository: any, encode: Function) => {
  return async function insert(data: IUser) {
    // Check if User already exist
    let exist = await repository.findMemberExist(data);
    //console.log(exist)
    if (exist) {
      return null;
    } else {
      //Hash password
      data.password = await encode(data.password);
      // Insert in DB
      let res = await repository.save(data);
      if (res) {
        return res;
      } else {
        throw new Error("Something went wrong!")
      }
    }
  }
}

export default singUp;
