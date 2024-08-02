import { Module } from '@nestjs/common';
import { UploadfileService } from './uploadfile.service';
import { UploadfileController } from './uploadfile.controller';
import { MulterModule } from '@nestjs/platform-express';
import { FILE_UPLOAD_DIR } from 'src/constants';

@Module({
  imports: [
    MulterModule.register({
      dest: FILE_UPLOAD_DIR,
      limits: {
        fileSize: 1000 * 1000 * 1, //1mb
      },
    }),
  ],
  controllers: [UploadfileController],
  providers: [UploadfileService],
})
export class UploadfileModule {}
