import { Request, Response } from "express";

const signUp = (req: Request, res: Response) => {
  const user = req.body;
  res.sendStatus(201);
};

export { signUp };
