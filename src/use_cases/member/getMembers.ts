
const getMembers = (repository: any) => {
  return async function select() {
    let data = await repository.find();
    if(data) return data;
    else [];
  }
}

export default getMembers;
