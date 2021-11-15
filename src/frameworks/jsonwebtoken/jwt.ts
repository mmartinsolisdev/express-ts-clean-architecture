import jwt from "jsonwebtoken";

function generateToken() {
  return jwt.sign({ user: "mike" }, process.env.SECRET as string, { expiresIn: '1h' });
}

function verifyJwt(token: string) {
  try {
    jwt.verify(token, process.env.SECRET as string);
  } catch (err) {
    return err;
  }
}

export default {
  generateToken,
  verifyJwt
}
