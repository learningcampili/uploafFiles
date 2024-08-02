import { BadRequestException } from '@nestjs/common';
import { Request } from 'express';

export const fileNameEditor = (
  req: Request,
  file: any,
  callback: (error: any, filename) => void,
) => {
  const newFileName = new Date().getTime() + '-' + file.originalname;
  callback(null, newFileName);
};

export const fileImageFilter = (
  req: Request,
  file: any,
  callback: (error: any, valid: boolean) => void,
) => {
  if (
    !file.originalname ||
    !file.originalname.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)
  ) {
    return callback(new BadRequestException('formato no valido'), false);
  }

  return callback(null, true);
};
