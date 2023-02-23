import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(15)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  password: string;

  imageUrl: string;
}
