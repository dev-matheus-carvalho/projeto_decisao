import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestExtends extends Request {
  user?: string | JwtPayloadWithEmail | JwtPayload;
}

interface JwtPayloadWithEmail extends JwtPayload {
  email: string;
}
