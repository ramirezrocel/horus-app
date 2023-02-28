import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  value: string;
  postImageURL: string;
}
