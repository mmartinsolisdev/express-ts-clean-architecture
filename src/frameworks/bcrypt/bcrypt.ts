import bcrypt from 'bcrypt';

const saltRounds = 10;

async function encode(pass: string) {
  const hash = await bcrypt.hashSync(pass, saltRounds);
  return hash;
}

async function decode(pass: string, hash: string) {
  // Load hash from your password DB.
  const decode = await bcrypt.compareSync(pass, hash); // true
  return decode;
}

export {
  encode,
  decode
}
