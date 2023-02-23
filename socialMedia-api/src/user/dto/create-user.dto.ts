import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  email: string;

  @MinLength(5)
  @MaxLength(15)
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  imageUrl: string;
}
