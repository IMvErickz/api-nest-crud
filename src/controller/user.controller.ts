import { Body, Controller, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { DeleteUserService } from "src/service/User/Delete.service";
import { RegisterUser } from "src/service/User/Register.service";
import { UpdateUserService } from "src/service/User/Update.service";
import { UserIdService } from "src/service/User/UserId.service";
import { PrismaService } from "src/service/prisma.service";

interface UserProps {
    name: string
    email: string
    password: string
}

@Controller()
export class UserController {
    constructor(
        private readonly userRegister: RegisterUser,
        private readonly userId: UserIdService,
        private readonly prisma: PrismaService,
        private readonly deleteUser: DeleteUserService,
        private readonly updateUser: UpdateUserService
    ) { }

    @Get('user')
    async getAllUser() {
        return await this.prisma.user.findMany()
    }

    @Post('user')
    async getHello(@Body() userProps: UserProps): Promise<void> {
        await this.userRegister.createUser({
            email: userProps.email,
            name: userProps.name,
            password: userProps.password
        })
    }

    @Get('user/:id')
    async getUserId(@Param('id') id: string): Promise<any> {
        return await this.userId.userId({
            id
        })
    }

    @Put('user/:id')
    async UpdateUSerController(@Param('id') id: string, @Body() userProps: UserProps) {
        await this.updateUser.updateUser({
            id,
            email: userProps.email,
            name: userProps.name,
            password: userProps.password
        })
    }

    @Delete('user/:id')
    async DeleteUserService(@Param('id') id: string): Promise<void> {
        return await this.deleteUser.deleteUser({
            id
        })
    }
}
