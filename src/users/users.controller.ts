import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() body: any) {
        return this.usersService.createUser(body.fname, body.lname, body.age);
    }    

    @Get()
    getAllUser() {
        return this.usersService.getAllusers();
    }

    @Get(':id')
    getUser(@Param() params: any) {
        return this.usersService.getUser(params.id);
    }

    @Put(':id')
    updateUser(@Param() params: any, @Body() body: any) {
        return this.usersService.updateUser(params.id, body);
    }

    @Delete(':id')
    deleteUser(@Param() params: any) {
        return this.usersService.deleteUser(params.id);
    }

}
