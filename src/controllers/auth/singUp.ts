

const singUp = (register: Function) => {
  return async function get(httpRequest: any) {
    try {
      const { ...body } = httpRequest.body;
      const registerInfo = await register(body);
      if (registerInfo) return { statusCode: 200, body: { msg: "User was successfully registered." }};
      else return { statusCode: 403, body: { msg: "User with this Email already exist."}};
    } catch (e) {
      console.error(e)
      return {
        statusCode: 400,
        body: { error: 'Something went wrong in Register process' }
      };
    };
  };
};

export default singUp;
