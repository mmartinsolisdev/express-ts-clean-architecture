
const addMember = (repository: any) => {
  return async function insert(data: Object) {
    // Check if User already exist
    let exist = await repository.findMemberExist(data);
    //console.log(exist)
    if (exist) {
      return null;
    } else {
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

export default addMember;
