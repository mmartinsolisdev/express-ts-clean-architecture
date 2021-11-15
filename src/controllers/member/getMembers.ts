
const getMember = (getMembers: Function) => {
  return async function get(httpRequest: any) {
    try {
      const members = await getMembers();
        return {
          statusCode: 200,
          body: { members }
        };
    } catch (e) {
      console.error(e)
      return {
        statusCode: 400,
        body: { error: 'Users not found' }
      };
    };
  };
};

export default getMember;
