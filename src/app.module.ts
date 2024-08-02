import { Module } from '@nestjs/common';

import { UploadfileModule } from './uploadfile/uploadfile.module';

@Module({
  imports: [UploadfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
