
const getMember = (getMember: Function) => {
  return async function get(httpRequest: any) {
    try {
      const member = await getMember(httpRequest.params.id);
        //console.log("In Use Controller =>", member)
        if (member) {
          return { statusCode: 200, body: { member }};
        } else {
          return { statusCode: 404, body: { msg: "User not found."}};
        }
    } catch (e) {
      console.error("Bad request =>", e)
      return {
        statusCode: 400,
        body: { error: 'Bad Request' }
      };
    };
  };
};

export default getMember;
