import { NextFunction, Request, Response } from "express";

const errorHandler = async (
  error: { code: string; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.code === "Not found") {
    return res.status(404).send({ message: error.message });
  } else if (error.code === "Conflict") {
    return res.status(409).send({ message: error.message });
  } else if (error.code === "IncompatibleFormat") {
    return res.status(422).send({ message: error.message });
  } else if (error.code === "Expired") {
    return res.status(406).send({ message: error.message });
  } else if (error.code === "Unauthorized") {
    return res.status(401).send({ message: error.message });
  } else if (error.code === "BadRequest") {
    return res.status(400).send({ message: error.message });
  }

  res.status(500).send({ message: error.message });
};

export default errorHandler;
