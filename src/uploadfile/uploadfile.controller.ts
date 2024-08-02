import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploadfileService } from './uploadfile.service';
import { CreateUploadfileDto } from './dto/create-uploadfile.dto';
import { UpdateUploadfileDto } from './dto/update-uploadfile.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FILE_UPLOAD_DIR } from 'src/constants';
import { fileImageFilter, fileNameEditor } from './utils/file.utils';

@Controller('uploads')
export class UploadfileController {
  constructor(private readonly uploadfileService: UploadfileService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        filename: fileNameEditor,
        destination: FILE_UPLOAD_DIR, // se podria sobreescribir aca
      }),
      limits: {
        fileSize: 1000 * 1000 * 0.5,
      },
      fileFilter: fileImageFilter,
    }),
  )
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateUploadfileDto,
  ) {
    // aca se puede salvar el nombre a la base de datos
    console.log(file);
    return {
      filename: file.filename,
      dto,
    };
  }
}
