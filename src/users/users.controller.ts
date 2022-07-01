import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(public readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }
}
