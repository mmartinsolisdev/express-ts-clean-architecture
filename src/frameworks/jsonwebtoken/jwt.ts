import jwt from "jsonwebtoken";

function generateToken(userID: string, role: string[]) {
  return jwt.sign({ user: userID, role: role }, process.env.SECRET as string, { expiresIn: '1h' });
}

async function verifyJwt(token: string) {
  try {
    let decoded = await jwt.verify(token, process.env.SECRET as string);
    //console.log(decoded);
    return decoded;
  } catch (err) {
    return err;
  }
}

export default {
  generateToken,
  verifyJwt
}
