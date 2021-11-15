
const updateMember = (repository: any) => {
  return async function update(data: Object, id: string) {
      //Insert in DB
      let res = await repository.update(id, data);
      return res;
  }
}

export default updateMember;
