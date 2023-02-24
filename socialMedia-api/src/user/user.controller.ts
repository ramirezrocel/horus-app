import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Get,
  Request,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Request() req) {
    // this.postService.currentUserId = +req.user.userId;
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Request() req) {
    // this.todoService.currentUserId = +req.user.userId;
    return this.userService.findUser(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.userService.updateIsAdmin(+id, updateUserDto);
  }
}
