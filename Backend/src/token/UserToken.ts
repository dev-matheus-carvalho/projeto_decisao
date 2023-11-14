import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GerarToken(email: string) {
  const jwt = sign({ email }, JWT_SECRET, {
    expiresIn: '15h',
  });
  return jwt;
}

export async function VerificarToken(jwt: string) {
  const estaCorreto = verify(jwt, JWT_SECRET);
  return estaCorreto;
}
