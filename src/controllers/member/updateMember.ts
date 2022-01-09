
const updateMember = (updateMember: Function) => {
  return async function add(httpRequest: any) {
    try {
      //console.log("bodyController => ", httpRequest.body);
      const { ...body } = httpRequest.body;
      const id = httpRequest.params.id
      const member = await updateMember(body, id);
      if (member) {
        return { statusCode: 201, body: { member }}
      } else {
        return { statusCode: 404, body: { msg: "Member does not exist."}}
      }
    } catch (e) {
      console.error(e)
      return {
        statusCode: 400,
        body: { error: 'Something went wrong' }
      };
    };
  };
};

export default updateMember;
