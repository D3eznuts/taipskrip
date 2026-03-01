import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  author?: string;
  @IsInt()
  @Min(1)
  @IsOptional()
  year?: number;
}
