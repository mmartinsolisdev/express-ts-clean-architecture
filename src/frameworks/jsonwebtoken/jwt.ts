import jwt from "jsonwebtoken";

function generateToken(userID: string, role: string[]) {
  return jwt.sign({ user: userID, role: role }, process.env.SECRET as string, { expiresIn: '1h' });
}

function verifyJwt(token: string) {
  let result = {Decoded: {}, Error: undefined};
  try {
    let decoded = jwt.verify(token, process.env.SECRET as string);
    result.Decoded = decoded;
  } catch (err) {
    //console.log(result.Decoded);
    result.Error = err;
  }
    return result;
}

export default {
  generateToken,
  verifyJwt
}
