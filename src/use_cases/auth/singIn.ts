
const login = (repository: any, generateToken: Function, decode: Function) => {
  return async function select(data: any) {
    let user = await repository.findMemberExist(data);
    if (user) {
      const passwordMatch = await decode(data.password, user.password);
      let result = passwordMatch ? await generateToken() : null;
      //console.log("Data in Use Case => ", result);
      return result;
    } else {
      return null;
    }
  }
}

  export default login;
