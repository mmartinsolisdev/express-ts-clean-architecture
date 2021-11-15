
const getMember = (repository: any) => {
  return async function select(id: string) {
    let member = await repository.findById(id);
    //console.log("In Use Case =>", member)
    return member;
  }
}

export default getMember;
