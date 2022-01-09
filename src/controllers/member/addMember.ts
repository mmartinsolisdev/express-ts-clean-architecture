
const addMember = (addMember: Function) => {
  return async function add(httpRequest: any) {
    try {
      //console.log("bodyController => ", httpRequest.body);
      const { ...body } = httpRequest.body;
      const member = await addMember(body);
      if (member) {
        return { statusCode: 201, body: { member } }
      } else {
        return { statusCode: 202, body: { msg: "Member already exist." } }
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

export default addMember;
