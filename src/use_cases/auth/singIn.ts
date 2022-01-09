
const login = (repository: any, generateToken: Function, decode: Function) => {
  return async function select(data: any) {
    let user = await repository.findMemberExist(data);
    //console.log(user);
    if (user) {
      const passwordMatch = await decode(data.password, user.password);
      let result = passwordMatch ? await generateToken(user._id, user.role) : null;
      //console.log("Data in Use Case => ", result);
      return result;
    } else {
      return null;
    }
  }
}

  export default login;
