import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() { gender }: { gender: string }) {
    return this.userService.createUser(gender);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}