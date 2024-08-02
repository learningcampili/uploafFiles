import { IsOptional, IsString } from 'class-validator';

export class CreateUploadfileDto {
  @IsOptional()
  @IsString()
  description?: string;
}
