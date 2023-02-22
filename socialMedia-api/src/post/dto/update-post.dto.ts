import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @Length(3)
  title: string;
  completed: boolean;
}
