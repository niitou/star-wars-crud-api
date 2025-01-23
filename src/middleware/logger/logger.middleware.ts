import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} --- ${req.path} | ${req.ip} --- ${req.headers['user-agent']}`);
  next();
}
