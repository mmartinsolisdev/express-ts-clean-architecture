
const singIn = (login: Function) => {
  return async function get(httpRequest: any) {
    try {
      const { ...body } = httpRequest.body;
      //console.log("Data in controller => ", body);
      const loginInfo = await login(body);
      if (loginInfo) return { statusCode: 200, body: { token: loginInfo }};
      else return { statusCode: 403, body: { msg: "Email or password incorrect."}};
    } catch (e) {
      console.error(e)
      return {
        statusCode: 400,
        body: { error: 'Something went wrong in Login process' }
      };
    };
  };
};

// const singIn = (generateToken: Function) => {
//   return async function get(httpRequest: any) {
//     try {
//       const { ...body } = httpRequest.body;
//       const token = await generateToken();
//       if (token) return { statusCode: 200, body: { token: token }};
//     } catch (e) {
//       console.error(e)
//       return {
//         statusCode: 400,
//         body: { error: 'Something went wrong in token generation' }
//       };
//     };
//   };
// };

export default singIn;
