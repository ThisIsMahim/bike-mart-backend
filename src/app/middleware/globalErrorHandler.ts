/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import config from "../config";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); 
  const errorResponse = {
    message: err.message || "Something went wrong",
    success: false,
    error: {
      name: err.name || "Error",
      errors: err.errors || null,
    },
    stack: config.node_env === "development" ? err.stack : undefined,
  };


  res.status(err.status || 500).json(errorResponse);
};

export default globalErrorHandler;
